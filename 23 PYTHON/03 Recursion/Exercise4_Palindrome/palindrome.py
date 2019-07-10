import math

def is_palindrome(s,i):
  while i < math.floor(len(s)+1):
    if s[i-1] == s[-i]:
      return is_palindrome(s,i+1)
    else:
      return False
  return True

print(is_palindrome("helloolleh",1))