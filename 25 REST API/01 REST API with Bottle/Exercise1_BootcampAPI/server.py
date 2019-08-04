from bottle import get, post, put, delete, run, request, response
import pymysql
import json

conn = pymysql.connect(host='localhost', user='root', password='root', db='bootcamp', charset='utf8', cursorclass=pymysql.cursors.DictCursor, autocommit=True)

def main():
  run(host='localhost',port=7000, debug=True, reloader=True)

@get('/')
def index():
  return "Go to /students/(id) for information on a specific student<br/>Go to /students/ for full list of students"

@get('/students/<student_id:int>')
def get_student(student_id):
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Students WHERE student_id = %d" % student_id
    try:
      cursor.execute(sql)
      retrieved = cursor.fetchone()
      if not retrieved is None:
        return json.dumps(retrieved)
      return json.dumps({"error_msg": "student not found in our databases"})
    except:
      return json.dumps({"error_msg": "internal server error"})
      

@post('/students')
def add_student():
  with conn.cursor() as cursor:
    q = request.json
    # q is the json object ajax sends out comprised of the keys: student_name, cohort
    sql = "INSERT INTO Students (student_name, cohort) VALUES ('%s', '%s')" % (q["student_name"], q["cohort"])
    if_exists = "SELECT * FROM Cohorts WHERE cohort_id = '%s'" % q["cohort"]
    try:
      cursor.execute(if_exists)
      if cursor.fetchone() is None:
        return json.dumps({"error_msg": "Cohort not found"})
      cursor.execute(sql)
      response.code = 201
      return json.dumps({"new_user_id" : cursor.lastrowid})
    except:
      return json.dumps({"error_msg": "internal server error"})
    

@put('/students/<student_id:int>')
def update_student(student_id):
  with conn.cursor() as cursor:
    q = request.json
    # q is the json object ajax sends out comprised of the keys: student_name, cohort
    sql = "UPDATE Students SET student_name = '%s' AND cohort = '%s' WHERE student_id = %d" % (q["student_name"], q["cohort"], student_id)
    try:
      cursor.execute(sql)
      sql = "SELECT * FROM Students WHERE student_id = %d" % student_id
      cursor.execute(sql)
      return json.dumps(cursor.fetchone())
    except:
      return json.dumps({"error_msg": "internal server error"})

@delete('/students/<student_id:int>')
def delete_student(student_id):
  if_exists = "SELECT * FROM Students WHERE student_id = %d" % student_id
  with conn.cursor() as cursor:
    cursor.execute(if_exists)
    if cursor.fetchone() is None:
      return json.dumps({"error_msg": "student with id %d not found" % student_id})
    sql = "DELETE FROM Students WHERE student_id = %d" % student_id
    try:
      cursor.execute(sql)
      return "student with id %d deleted" % student_id
    except:
      return json.dumps({"error_msg": "internal server error"})

@get('/students')
def get_student_list():
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Students"
    cursor.execute(sql)
    return json.dumps(cursor.fetchall())

@get('/cohorts/<cohort_id:int>')
def get_cohort(cohort_id):
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Cohorts WHERE cohort_id = '%s'" % cohort_id
    try:
      cursor.execute(sql)
      return json.dumps(cursor.fetchone())
    except:
      return json.dumps({"error_msg": "internal server error"})

@get('/cohorts')
def get_cohorts():
  with conn.cursor() as cursor:
    sql = "SELECT * FROM Cohorts"
    try:
      cursor.execute(sql)
      return json.dumps(cursor.fetchall())
    except:
      return json.dumps({"error_msg": "internal server error"})

@post('/cohorts')
def add_cohort():
  q = request.json
  sql = "INSERT INTO Cohorts (cohort_id, instructor_id, ta_id) VALUES ('%s', %d, %d)" % (q["cohort_id"], q["instructor_id"], q["ta_id"])
  if_exists = "SELECT * FROM Cohorts WHERE cohort_id = '%s'" % q["cohort_id"]
  try:
    with conn.cursor() as cursor:
      cursor.execute(if_exists)
      retrieved = cursor.fetchone()
      if len(str(q["instructor_id"])) > 11 or len(str(q["ta_id"])) > 11 or len(q["cohort_id"]) > 4:
        return json.dumps({"error_msg": "one or more of the details you entered is too long. please enter a cohort id of up to 4 characters, an instructor id of up to 11 digits, and a ta id of up to 11 digits"})
      elif not retrieved is None:
        return json.dumps({"error_msg": "there's already a cohort with this id in our databases. cohorts must have a unique id"})
      cursor.execute(sql)
      return ({"new_cohort_id": q["cohort_id"]})
  except:
    return json.dumps({"error_msg": "internal server error"})
  
@delete('/cohorts/<cohort_id>')
def delete_cohort(cohort_id):
  if_exists = "SELECT * FROM Cohorts WHERE cohort_id = '%s'" % cohort_id
  with conn.cursor() as cursor:
    cursor.execute(if_exists)
    if cursor.fetchone() is None:
      return json.dumps({"error_msg": "cohort with id %s not found" % cohort_id})
    sql = "DELETE FROM Cohorts WHERE cohort_id = '%s'" % cohort_id
    try:
      cursor.execute(sql)
      return "cohort with id %s deleted" % cohort_id
    except:
      return json.dumps({"error_msg": "internal server error"})


if __name__ == "__main__":
    main()