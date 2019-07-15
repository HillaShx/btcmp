from bottle import route, run, static_file

@route('/')
def index():
  return static_file('index.html', root='')

@route('/static/css/<filename>')
def css(filename):
  return static_file(filename, root='./static/css')

@route('/static/js/<filename>')
def js(filename):
  return static_file(filename, root='./static/js')

@route('/static/img/<filename>')
def img(filename):
  return static_file(filename, root='./static/img')

def main():
  run(host='localhost', port=7000)

if __name__ == "__main__":
    main()