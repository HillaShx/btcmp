from bottle import run, get, post, put, delete, request
import json

class AnimalsAPI:

  def __init__(self, db_adapter):
    self._db_adapter = db_adapter
    
  def run(self):
    run(host='localhost', port=7000)

  @post("/animals")
  def add_animal(self):
    self._db_adapter.add_animal()

  @get('/animals/<animal_id:int>')
  def get_animal(self, animal_id):
    animals_list = self._db_adapter.get_animals()
    return json.dumps(animals_list)

  @get('/animals')
  def get_animals(self):
    pass

  @put('/animals')
  def update_animal(self):
    pass

  @delete('/animals')
  def delete_animal(self):
    pass