import pymysql

conn = pymysql.connect(host='localhost', user='root', password='', db='imdb', charset='utf8', cursorclass=pymysql.cursors.DictCursor)

if __name__ == "__main__":
    with conn.cursor() as cursor:
      # sql = "ALTER TABLE actors ADD num_of_films INT"
      # cursor.execute(sql)
      # cursor.commit()
      sql = "SELECT actor_id, count(movie_id) FROM cast GROUP BY actor_id"
      cursor.execute(sql)
      all_films_by_id = cursor.fetchall()
      for i in range(len(all_films_by_id)):
        sql = "UPDATE actors SET num_of_films = {} WHERE id='{}'".format(all_films_by_id[i]["count(movie_id)"],all_films_by_id[i]["actor_id"])
        cursor.execute(sql)
      conn.commit()