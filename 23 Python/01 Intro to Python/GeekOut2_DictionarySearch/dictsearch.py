def dict_search(a,b,c):
  for key in c:
    if a in key:
      c[key] += b
  return c

print(dict_search("a",3,{"cat": 0, "bat": 2, "but" : 9}))