import json
from bottle import route, run
from random import choice

data = [
  {
      "name": "steven",
      "age": 8,
      "gem": "pink diamond"
    },
    {
      "name": "garnet",
      "age": 7543,
      "gem": "ruby&sapphire"
    },
    {
      "name": "pearl",
      "age": 4983,
      "gem": "pearl"
    }
]

@route('/')
def index():
  gem = choice(data)
  return json.dumps(gem)

def main():
  run(host="localhost", port=7000)

if __name__ == '__main__':
  main()