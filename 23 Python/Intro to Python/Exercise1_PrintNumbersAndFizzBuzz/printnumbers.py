# print 1-40 using a for loop

def print_num_for(x):
  counter = 0
  for i in range(1,41):
    print(i)

# print_num_for(40)

# print 1-40 using a while loop

def print_num_while(x):
  counter = 1
  while counter <= x:
    print(counter)
    counter+=1

# print_num_while(40)

# print 1-100; print "fizz" if divisible by 3, "buzz" if divisible by 5, "fizzbuzz" if divisible by both

def fizz_buzz(x):
  for i in range(1,x+1):
    if i%3 == 0 and i%5 == 0:
      print("fizzbuzz")
    elif i%3 == 0:
      print("fizz")
    elif i%5 == 0:
      print("buzz")
    else:
      print(i)

# fizz_buzz(100)