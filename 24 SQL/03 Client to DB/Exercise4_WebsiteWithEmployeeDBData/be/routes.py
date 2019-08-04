from bottle import run, get, static_file, template, TEMPLATE_PATH, jinja2_view
import dbutils

TEMPLATE_PATH.insert(0, '../fe/static')

@get('/')
@jinja2_view('index.html')
def index():
  return
  # return template('index.html', root='../fe/static')

@get('/static/<filename:path>')
def serve_static_files(filename):
  return static_file(filename, root='../fe/static')

@get('/departments')
# @view('departments.html')
def departments():
  all_depts = dbutils.get_departments()
  return template('templates/departments.html', depts=all_depts)
  # return dict(test="yoo")

@get('/employees')
def employees():
  all_emps = dbutils.get_employees()
  return template('templates/employees.html', emps=all_emps)

run(host="localhost", port=7000)