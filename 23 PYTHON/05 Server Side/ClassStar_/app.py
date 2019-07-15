from bottle import route, run, static_file

@route('/')
def index():
  return static_file("index.html", root='static')

run(host='localhost', port=7000, debug=True)