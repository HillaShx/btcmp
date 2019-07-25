from bottle import get, post, put, delete, run, request, response
import pymysql
import json

conn = pymysql.connect(host='localhost', user='root', password='root', db='bootcamp', charset='utf8', cursorclass=pymysql.cursors.DictCursor)

def main():
  run(host='localhost',port=7000, debug=True, reloader=True)

@get('/')
def index():
  return "Go to /students/(id) for information on a specific student<br/>Go to /students/ for full list of students<br/>Go to /students/add/(id) to add a student to the list<br/>"

@get('/students/<id:int>')
def get_student(id):
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Students WHERE stu_id={}".format(id)
    try:
      cursor.execute(sql)
      return json.dumps(cursor.fetchone())
    except:
      return "Error"
      

@post('/students/add')
def add_student():
  with conn.cursor() as cursor:
    q = request.json
    # q is the json object ajax sends out comprised of the keys: stu_name, cohort
    sql = "INSERT INTO Students (stu_name, cohort) VALUES ('{}', '{}')".format(q["stu_name"], q["cohort"])
    try:
      cursor.execute(sql)
      conn.commit()
      response.code = 201
      return json.dumps(q)
    except:
      return "oops"
    

# {"value_to_be_updated": "cohort","updated_value": "2019"}
@put('/students/<id:int>')
def update_student(id):
  with conn.cursor() as cursor:
    q = request.json
    # q is the json object ajax sends out comprised of the keys: value_to_be_updated, updated_value
    sql = "UPDATE Students SET %s = '%s' WHERE stu_id = %d" % (q["value_to_be_updated"], q["updated_value"], id)
    print(sql)
    try:
      cursor.execute(sql)
      conn.commit()
      sql = "SELECT * FROM Students WHERE stu_id = %d" % id
      try:
        cursor.execute(sql)
        return json.dumps(cursor.fetchone())
      except:
        return "but why"
    except:
      return "oopsie"

@delete('/students/<id:int>')
def delete_student(id):
  with conn.cursor() as cursor:
    sql = "DELETE FROM Students WHERE stu_id = %d" % id
    try:
      cursor.execute(sql)
      conn.commit()
      return "student deleted"
    except:
      return "couldn't do it"

@get('/students')
def get_student_list():
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Students"
    cursor.execute(sql)
    return json.dumps(cursor.fetchall())

@get('/cohorts/<cohort_id:int>')
def get_cohort(cohort_id):
  with conn.cursor() as cursor:
    sql = 'SELECT * FROM Cohorts WHERE cohort_id = "%s"' % cohort_id
    try:
      cursor.execute(sql)
      return json.dumps(cursor.fetchone())
    except:
      return ":("

@get('/cohorts')
def get_cohorts():
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Cohorts"
    try:
      cursor.execute(sql)
      return json.dumps(cursor.fetchall())
    except:
      return "womp womp"

if __name__ == "__main__":
    main()