from .base_database_adapter import BaseDatabaseAdapter
import pymysql

class MySqlDBAdapter(BaseDatabaseAdapter):
  def __init__(self):
    self._connection = pymysql.connect(host='localhost',user='root', password='root', db='animals', charset='utf8', cursorclass='')
  
  def add_animal(self, animal):
    try:
      with self._connection.cursor() as cursor:
        sql = "INSERT INTO animals VALUES(%s,%s,%d)"
        cursor.execute(sql,(animal.name,animal.type,animal.age))
        self._connection.commit()
        return "animal added"
    except:
      print("oops")

  def get_animal(self, animal_id):
    return super().get_animal(animal_id)

  def get_animals(self):
    return super().get_animals()

  def update_animal(self, animal_id, animal_to_update):
    return super().update_animal(animal_id, animal_to_update)

  def delete_animal(self, animal_id):
    return super().delete_animal(animal_id)
