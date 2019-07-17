from bottle import run, route, static_file, jinja2_view
import jinja2
import json
from functools import partial

view = partial(jinja2_view,template_lookup=['static'])

data = {
  "counter":0
}

@route('/')
@view('index.html')
def index():
  global data
  data["counter"] += 1
  return {"count":data["counter"]}

def main():
  run(host='localhost', port=7000)

if __name__ == "__main__":
    main()