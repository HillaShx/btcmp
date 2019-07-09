# exercise1

def donuts(x):
  if x < 10:
    donut_count = str(x)
  else:
    donut_count = "many"
  return "the number of donuts is " + donut_count


# print(donuts(3))
# print(donuts(12))

# exercise2

def both_ends(s):
  return s[:2] + s[-2:]

# print(both_ends("hello"))

# exercise3

def fix_start(s):
  return s[0]+s[1:].replace(s[0],"*")

# print(fix_start("bubble"))

# exercise4

def mix_up(a,b):
  # return a[1::-1] + a[2:] + " " + b[1::-1] + b[2:] <-i thought the instructions meant something else, i'll leave it here because it's cool
  return b[:2] + a[2:] + " " + a[:2] + b[2:]

# print(mix_up("hello","goodbye"))