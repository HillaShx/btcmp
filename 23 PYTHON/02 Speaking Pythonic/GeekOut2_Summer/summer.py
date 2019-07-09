def summer(l):
  result = l[0]
  for i in range(1,len(l)):
    result += l[i]
  return result

print(summer(['a','c','b']))
print(summer([1,2,3]))