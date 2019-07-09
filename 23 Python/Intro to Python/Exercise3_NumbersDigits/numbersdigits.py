def analyze_numbers_digits():
  n = input('enter a number:\n')
  sum_of_digits = 0
  print(f"you've entered the number {n}")

  print("the digits of this number are:", end=" ")
  for digit in n:
    print(int(digit), end=", ")
    sum_of_digits+=int(digit)
  print()
  print(f"the sum of these digits is {sum_of_digits}")

analyze_numbers_digits()