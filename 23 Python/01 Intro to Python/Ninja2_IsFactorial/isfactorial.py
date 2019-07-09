def is_factorial(n):
  sum_til_n = 0
  for i in range(1,n+1):
    sum_til_n += i
    if sum_til_n == n:
      return i
    elif sum_til_n > n:
      return sum_til_n - i


print(15)
print(is_factorial(15))
print(17)
print(is_factorial(17))