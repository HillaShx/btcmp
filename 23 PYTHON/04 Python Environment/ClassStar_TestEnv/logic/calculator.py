from utilities.numbers_generator import generate_numbers

def my_add(a,b):
  return a+b

def add_generated_numbers():
  a,b = generate_numbers()
  return my_add(a,b)