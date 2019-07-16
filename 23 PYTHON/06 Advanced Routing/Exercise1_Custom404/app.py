from bottle import run, route, request, response, error

@route('/')
def index():
    return "yellow mold"

@error(404)
def error404(error):
        return 'nothing here, sorry'

def main():
    run(host='localhost', port=7000)

if __name__ == '__main__':
    main()