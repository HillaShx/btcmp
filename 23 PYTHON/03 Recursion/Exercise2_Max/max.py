def max_in_list(l, i): 
    if (i == len(l)-1): 
        return l[-1]
    if l[i+1] > max_in_list(l,i+1):
      return l[i+1]
    else:
      return max_in_list(l,i+1)

print(max_in_list([3,4,15,6,9,22],0))