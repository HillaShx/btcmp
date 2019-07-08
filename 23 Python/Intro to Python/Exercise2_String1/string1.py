def donuts(x):
  if x < 10:
    donut_count = str(x)
  else:
    donut_count = "many"
  return "the number of donuts is " + donut_count


print(donuts(3))
print(donuts(12))