from bottle import (Bottle, request, jinja2_view, redirect)
from backend import utils
from backend import controller

pageHandler = Bottle()


@pageHandler.get('/start')
@jinja2_view('./backend/pages/start.html')
def start():
    currentPlayer = request.get_cookie("player")
    if currentPlayer:
        redirect("/games")
        return
    return {"version" : utils.getVersion()}

@pageHandler.get('/games')
@jinja2_view('./backend/pages/games.html')
def games():
    currentPlayer = request.get_cookie("player")
    if not currentPlayer:
        redirect("/start")
        return
    return {"version" : utils.getVersion(), "games": controller.listOpenGames()}

@pageHandler.get('/games/filter/<category_name>')
@jinja2_view('./backend/pages/games.html')
def games_filtered(category_name):
    currentPlayer = request.get_cookie("player")
    games_to_be_listed = controller.listOpenGames()
    if not currentPlayer:
        redirect("/start")
        return
    if category_name == "failed":
        games_to_be_listed = controller.listFailedGames()
    elif category_name == "won":
        games_to_be_listed = controller.listWonGames()
    elif category_name == "all":
        games_to_be_listed = controller.listGames()
    return {"version" : utils.getVersion(), "games": games_to_be_listed}

@pageHandler.get('/games/<game_id>')
@jinja2_view('./backend/pages/game.html')
def play(game_id):
    currentPlayer = request.get_cookie("player")
    if not currentPlayer or not controller.gameExists(game_id):
        redirect("/start")
        return
    return {"version" : utils.getVersion()}

@pageHandler.get('/')
@jinja2_view('./backend/pages/index.html')
def landing():
    return {"version" : utils.getVersion()}