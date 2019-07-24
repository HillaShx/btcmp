import pymysql

conn = pymysql.connect(host='localhost', user='root', password='', db='imdb', charset='utf8', cursorclass=pymysql.cursors.DictCursor)

acts = ['Rosanna Arquette','Tracey Antosiweicz','Someone Someoneson']

if __name__ == "__main__":
    try:
      with conn.cursor() as cursor:
        for name in acts:
          sql="SELECT * FROM actors WHERE full_name = '{}'".format(name)
          cursor.execute(sql)
          result = cursor.fetchall()
          if result:
            print(f'{name} is in the DB')
          else:
            print(f'{name} wasn\'t found in the DB')
          
    except:
      print("failed")