from abc import ABC, abstractmethod

class BaseDatabaseAdapter(ABC):
    # CREATE
    @abstractmethod
    def add_animal(self, animal):
      pass

    # READ
    @abstractmethod
    def get_animal(self, animal_id):
      pass

    @abstractmethod
    def get_animals(self):
      pass

    # UPDATE
    @abstractmethod
    def update_animal(self, animal_id, animal_to_update):
      pass

    # DELETE
    @abstractmethod
    def delete_animal(self, animal_id):
      pass
    