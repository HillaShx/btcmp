from bottle import route, run, jinja2_view
from jinja2 import Template

@route('/')
def index():
  temp = Template('<h1>Hello {{name}}</h1>')
  return temp.render(name='World')

def main():
  run(host='localhost', port=7000)

if __name__ == "__main__":
    main()