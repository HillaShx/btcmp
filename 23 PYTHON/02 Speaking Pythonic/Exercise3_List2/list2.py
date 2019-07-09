# exercise1

def remove_adjacent(l):
  return [l[i] for i in range(len(l)) if i == 0 or l[i] != l[i-1]]

# print(remove_adjacent([2,2,3,4,5,5,6,6,7,7]))

# exercise2

def linear_merge(l1,l2):
  return sorted(l1 + l2)

# print(linear_merge([1,4,2],[2,9,3]))