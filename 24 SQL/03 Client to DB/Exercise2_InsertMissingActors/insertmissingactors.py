import pymysql

conn = pymysql.connect(host='localhost', user='root', password='', db='imdb', charset='utf8', cursorclass=pymysql.cursors.DictCursor)

exi_acts = [{'id':'2547', 'full_name':'Andrew Adamson', 'gender':'M'},{'id':'533380', 'full_name':'Karen Allen', 'gender':'F'}]
new_acts = [{'id':909009090, 'full_name':'Someone Someoneson', 'gender':'M'},{'id':9080708, 'full_name':'Someoneson Someone', 'gender':'F'}, {'id':901020300, 'full_name': 'Someone Sonsomeone', 'gender':'F'}]
acts = exi_acts + new_acts

if __name__ == "__main__":
    try:
      with conn.cursor() as cursor:
        cursor.execute("SELECT id from actors")
        all_ids = [act_id['id'] for act_id in cursor.fetchall()]
        for name in acts:
          sql = 'SELECT * from actors WHERE (id={} AND full_name="{}" AND gender="{}")'.format(name["id"],name["full_name"],name["gender"])
          cursor.execute(sql)
          result = cursor.fetchone()
          if not result:
            if name["id"] in all_ids:
              print("Duplicate ID. This is not allowed!")
            else:
              sql = 'INSERT INTO actors VALUES ("{}","{}","{}");'.format(name["id"],name["full_name"],name["gender"])
              cursor.execute(sql)
        conn.commit()
    except:
      print("failed")


