def my_sum(nums,index):
  if index == len(nums)-1:
    return nums[-1]
  return my_sum(nums,index+1) + nums[index]

print(my_sum([1,2,3,4],0))

# class star:

# def my_pow(base,pow):
#   if pow == 0:
#     return 1
#   return my_pow(base,pow-1) * base

# print(my_pow(2,3))