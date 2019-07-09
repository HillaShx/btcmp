# exercise1

def match_ends(lofs):
  count = 0
  for s in lofs:
    if len(s) > 1 and s[0] == s[-1]:
      count += 1
  return count

# print(match_ends(["aba", "abb", "acab", "acba"]))

# exercise2

def front_x(lofs):
  return [x for x in lofs if x[0] == "x"] + [x for x in lofs if x[0] != "x"]

# print(front_x(["xan", "nax", "xena"]))

# exercise3

def return_last(t):
  return t[-1]

def sort_list(lots):
  return sorted(lots, key=return_last)

# print(sort_list([(9,1),(0,3),(7,2)]))