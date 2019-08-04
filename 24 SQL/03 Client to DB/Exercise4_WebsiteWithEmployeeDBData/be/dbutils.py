import pymysql

connection = pymysql.connect(host='localhost', user='root', password='root', db='employees', charset='utf8', cursorclass=pymysql.cursors.DictCursor, autocommit=True)

def get_departments():
  sql = "SELECT dept_name FROM departments"
  with connection.cursor() as cursor:
    cursor.execute(sql)
    return cursor.fetchall()

def get_employees():
  sql = "SELECT first_name, last_name FROM employees"
  with connection.cursor() as cursor:
    cursor.execute(sql)
    return cursor.fetchall()