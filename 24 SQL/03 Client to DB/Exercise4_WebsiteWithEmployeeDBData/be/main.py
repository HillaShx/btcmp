import pymysql
import routes
from bottle import run

connection = pymysql.connect(host='localhost', user='root', password='root', db='employees', charset='utf8', cursorclass=pymysql.cursors.DictCursor, autocommit=True)