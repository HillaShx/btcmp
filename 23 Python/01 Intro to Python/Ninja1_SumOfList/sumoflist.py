def sum_of_list(l):
  overall_sum = 0
  for i in l:
    overall_sum += i
  new_list = []
  for j in l:
    new_list.append(overall_sum - j)
  return new_list


print(sum_of_list([1,2,3,4,5,6,7,8,9,0]))