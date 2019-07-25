from api.animals_api import AnimalsAPI
from dal.mysql_db_adapter import MySqlDBAdapter

if __name__ == "__main__":
    api = AnimalsAPI(MySqlDBAdapter)
    api.run()