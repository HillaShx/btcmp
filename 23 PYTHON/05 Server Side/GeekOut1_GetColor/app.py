import json
from bottle import route, run, static_file, template, request

data = [
  {"name": "rrrrr"}, {"name": "kkk"}, {"name": "comsi comsa"}, {"name": "\u05e9"}, {"name": "\u05e9\u05d3\u05d24"}, {"name": "777"}, {"name": "eeeee"}, {"name": "jonas love shnizel"}, {"name": "haha"}, {"name": "Rahely"}, {"name": "\u05d7\u05d5\u05de\u05d5\u05e1"}, {"name": "that"}, {"name": "#555"}, {"name": "zoeeeeehhhhh"}, {"name": "malo"}, {"name": "test194788"}, {"name": "shalomot"}, {"name": "324324"}, {"name": "sss"}, {"name": "dsf"}, {"name": "bisque"}, {"name": "JonasTheMan2"}, {"name": "47"}, {"name": "dkjhddjhslkdbsiublid"}, {"name": "dsfsdf"}, {"name": "eladddddddddddddddddddddddddddddddddddddddddddddd"}, {"name": "wuTang"}, {"name": "aaaasdd"}, {"name": "ssssss"}, {"name": "444"}, {"name": "reerer"}, {"name": "hatzel"}, {"name": "more blue"}, {"name": "Rach"}, {"name": "davit"}, {"name": "5555555555555555555555555"}, {"name": "fff"}, {"name": "grey"}, {"name": "yellow"}, {"name": "777"}, {"name": "kfir2222"}, {"name": "47"}, {"name": "khkvuvkuyuytv"}, {"name": "elll"}, {"name": "123"}, {"name": "zingblinting"}, {"name": "lavan"}, {"name": "YELLOWss"}, {"name": "lightblue"}, {"name": "w"}, {"name": "always blue1"}, {"name": "FINALLY"}, {"name": "#123"}, {"name": "JezusThisWasHard"}, {"name": "3"}, {"name": "asdf1"}, {"name": "SomeColor"}, {"name": "fgfgfgf"}, {"name": "YAY REALLY FINALLY "}, {"name": "112233"}, {"name": "undefined"}, {"name": "wewelcomeallthehelp!"}, {"name": "aAA"}, {"name": "2"}, {"name": "aaron da man"}, {"name": "asdfffdsa"}, {"name": "maroon"}, {"name": "rrrrr"}, {"name": "darkpurple"}, {"name": "iff"}, {"name": "iceblue"}, {"name": "the empire did nothing wrong"}, {"name": "rr"}, {"name": "adrfrushman"}, {"name": "asdfasdf"}, {"name": "rach"}, {"name": "1234"}, {"name": "giladuu"}, {"name": "kaler"}, {"name": "addingcolors"}, {"name": "boum"}, {"name": "sapphire"}, {"name": "dasasdas"}, {"name": "JonasTheMan"}, {"name": "pizza"}, {"name": "slksjlskjssss"}, {"name": "lulaas"}, {"name": "lkjlkjlj"}, {"name": "7787"}, {"name": "blurry"}, {"name": "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"}, {"name": "ja blesss"}, {"name": "s"}, {"name": "dfff2"}, {"name": "sa"}, {"name": "asdjfla"}, {"name": "light blue"}, {"name": "White NANA"}, {"name": "white"}, {"name": "lula"}, {"name": "blue"}, {"name": "KK3LCC09ENM"}, {"name": "pink"}, {"name": "ew"}, {"name": "red"}, {"name": "wit"}, {"name": "purple"}, {"name": "green"}, {"name": "Black BIKO"}, {"name": "color"}, {"name": "test2019"}, {"name": "KATOM"}, {"name": "\u05d0\u05e0\u05d9 \u05d0\u05d5\u05d4\u05d1 \u05d7\u05d5\u05de\u05d5\u05e1"}, {"name": "47"}, {"name": "Carmin"}, {"name": "gfsdgsdfsdfgsdfgfsdgsdf"}, {"name": "kjhkjhkhuhlkjlkjlkj"}, {"name": "great name for a color"}, {"name": "LOTEM_DOESNt_KNOW_TO_TEACH"}, {"name": "rachelwi"}, {"name": "aafff0000"}, {"name": "marron"}, {"name": "treeeee"}, {"name": "aquablue"}, {"name": "yellowssss"}, {"name": "d"}, {"name": "{\"name\":\"\"}"}, {"name": "omg"}, {"name": "zingbling"}, {"name": "asdf"}, {"name": "blueish"}, {"name": "whiterrrr"}, {"name": "beige"}, {"name": "000"}, {"name": "aafff0000111"}, {"name": "lightcoral"}, {"name": "trrrrrrrrrrrr"}, {"name": "redish blue"}, {"name": "violet"}, {"name": "r"}, {"name": "333"}, {"name": "n"}, {"name": "asdfljaslfd"}, {"name": "moshe"}, {"name": "lime"}, {"name": "HelloWorld"}, {"name": "asdljfklasjdf"}, {"name": "fefe"}, {"name": "asdjkflasfd"}, {"name": "daadad"}, {"name": "a"}, {"name": "bingo"}, {"name": "aaa"}, {"name": "orange"}, {"name": "nectar"}, {"name": "magenta"}, {"name": "cbw.cnwlfvn"}, {"name": "ws"}, {"name": "uuuufujrfhrub"}, {"name": "kkkasas"}
]

@route('/')
def index():
  return template('addcolor.html')

@route('/get_colors')
def get_colors():
  return json.dumps(data)

@route('/add_color', method='POST')
def add_color():
  if not any(color["name"] == request.forms.get("color") for color in data):
    data.append({"name": request.forms.get("color")})
    return {"msg":"Color added"}
  return {"msg":"Color already exists"}

@route('/static/js/<filename>')
def js(filename):
  return static_file(filename, root='static/js')

def main():
  run(host='localhost', port=7000)

if __name__ == "__main__":
    main()