def analyze_numbers_digits(num):
  sum_of_digits = 0
  print("you've entered the number " + str(num))
  print("the digits of this number are:")
  for digit in str(num):
    print(int(digit))
    sum_of_digits+=int(digit)
  print("the sum of these digits is " + str(sum_of_digits))

analyze_numbers_digits(88888)