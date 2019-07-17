from bottle import route, run, static_file, jinja2_view, request, get, post
from functools import partial
import jinja2

data = {
  "fname":"",
  "lname":""
}

view = partial(jinja2_view, template_lookup=['templates'])

@get('/js/<filename:path>')
def serve_js():
  return static_file('logic.js', root='')

@get('/')
@view('index.html')
def index():
  return {"data":data}

@post('/post_user_details')
@view('index.html')
def post_user_details():
  global data
  data["fname"] = request.forms.get("fname")
  data["lname"] = request.forms.get("lname")
  return {"data":data}


def main():
  run(host='localhost', port=7000)

if __name__ == "__main__":
    main()