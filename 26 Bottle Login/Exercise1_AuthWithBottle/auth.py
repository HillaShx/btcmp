from bottle import run, get, post, template, redirect, response, request
import pymysql
from hashlib import md5
from uuid import uuid4

connection = pymysql.connect(host='localhost', user='root', password='root', db='bootcamp', charset='utf8', cursorclass=pymysql.cursors.DictCursor)

def user_is_logged_in(request):
  session_id_from_cookies = request.get_cookie("session_id")
  sql = "SELECT * FROM Users WHERE session_id = '%s'" % session_id_from_cookies
  with connection.cursor() as cursor:
    try:
      cursor.execute(sql)
      result = cursor.fetchone()
      return bool(result)
    except:
      print('couldn\'t find sesion id in DB')
      return False


def handle_login(request):
  username = request.forms.get("username")
  password = request.forms.get("password")
  req_url = request.forms.get("next")
  print(username, password, req_url)
  is_verified = verify_user(username,password)
  if is_verified:
    redirect(req_url)
  else:
    context = {"next": req_url, "error_msg": "wrong username or password"}
    return template("templates/login.html", **context)

def update_user_session_id(username, password):
  session_id = str(uuid4().hex)[:8]
  sql = "UPDATE Users SET session_id = '%s' WHERE username = '%s' AND password = '%s'" % (session_id, username, password)
  with connection.cursor() as cursor:
    try:
      cursor.execute(sql)
      connection.commit()
    except:
      print('update_user_session_id error')
  response.set_cookie('session_id', session_id)


def verify_user(username, password):
  hashed_pass = md5((password).encode('utf-8')).hexdigest()
  sql = "SELECT * FROM Users WHERE username = '%s' AND password = '%s'" % (username, hashed_pass)
  with connection.cursor() as cursor:
    cursor.execute(sql)
    result = cursor.fetchone()
    if result:
      update_user_session_id(username, hashed_pass)
      return True
    return False


@get('/')
def index():
  return "Hi! Wanna hear a <a href='/secret'>secret</a>?"

@get('/secret')
def secret():
  if user_is_logged_in(request):
    return "Mr. Blake wasn't murdered"
  else:
    redirect('/login?next=/secret')

@get('/login')
def login_page():
  req_url = request.GET.get('next','/')
  context = {'next': req_url, 'error_msg': ""}
  return template('templates/login.html', **context)

@post('/login')
def log_in():
  print('we\'re here')
  return handle_login(request)

if __name__ == "__main__":
    run(host='localhost', port=9000)