def sum_of_numbers_in_list(l):
  total_sum = 0
  for num in l:
    if isinstance(num, int):
      total_sum += num
  return total_sum

print('function call: sum_of_numbers_in_list(["a", 1, "5", 3])')
print(sum_of_numbers_in_list(["a", 1, "5", 3]))