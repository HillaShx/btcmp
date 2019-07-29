from bottle import run, get, static_file, template, TEMPLATE_PATH

TEMPLATE_PATH.insert(0, '../fe/static/templates')

@get('/')
def index():
  return static_file('index.html', root='../fe/static')

@get('/static/<filename:path>')
def serve_static_files(filename):
  return static_file(filename, root='../fe/static')

@get('/departments')
def departments():
  return template('departments.html', test="yoo")

@get('/employees')
def employees():
  return template('departments.html', test="too")

run(host="localhost", port=7000)