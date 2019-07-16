import feedparser
import json
from bottle import route, run, static_file, get, post

feed_entries = feedparser.parse('https://www.dailymail.co.uk/articles.rss').entries

filtered_entries_list = [dict(filter(lambda item: item[0] in ['title','link'], item.items())) for item in feed_entries]

# title: print(feed_entries[0].title)
# link: print(feed_entries[0].link)

@get('/')
def index():
  return static_file('index.html', root='')

@get('/get_items')
def get_items():
  return json.dumps(filtered_entries_list)

@route('/<filename:path>')
def send_static(filename):
    return static_file(filename, root='static/')

def main():
  run(host='localhost', port=7000)

if __name__ == "__main__":
    main()