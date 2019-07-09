import math

# exercise1

def verbing(s):
  st = s
  if len(s) >= 3:
    if s[-3:] == "ing" :
      st+="ly"
    else:
      st+="ing"
  return st

# print(verbing("at"))
# print(verbing("attempt"))
# print(verbing("attempting"))

# exercise2

def not_bad(s):
  st = s
  not_index = st.find("not")
  bad_index = st.find("bad")
  if not_index < bad_index:
    st = st.replace(st[not_index:(bad_index+3)], "good")
  return st

# print(not_bad("this is not that bad!"))

# exercise3

def front_back(a,b):
  a_half_point = math.ceil(len(a)/2)
  b_half_point = math.ceil(len(b)/2)
  a_front = a[:a_half_point]
  a_back = a[a_half_point:]
  b_front = b[:b_half_point]
  b_back = b[b_half_point:]
  print(a_front + b_front + " " + a_back + b_back)

# front_back("hello","world!")