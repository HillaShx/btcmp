# max()

def my_max_of2(x,y):
  return x if x > y else y

def my_max_of3(x,y,z):
  return x if (x >= y and x >= z) else y if (y >= x and y >= z) else z

def my_len(x):
  count = 0
  for i in x:
    count+=1
  return count

def is_vowel(c):
  return c in "aeiou"

def my_translate(s):
  return "".join([c if c in "aeiou " else f"{c}o{c}" for c in list(s)])

def my_sum(lofn):
  result = 0
  for n in lofn:
    result += n
  return result

def my_mult(lofn):
  result = 1
  for n in lofn:
    result *= n
  return result

def my_reverse(s):
  return "".join([i for i in list(s)[::-1]])

def is_palindrome(s):
  for i in range(len(s)):
    if s[i] != s[-i-1]:
      return False
  return True

def is_member(x,l):
  for i in l:
    if x == i:
      return True
  return False
  # return x in l

def overlapping(l1,l2):
  # for i in l1:
  #   if is_member(i, l2):
  #     return True
  # return False
  for i in l1:
    for j in l2:
      if i == j:
        return True
  return False

def generate_n_chars(n,c):
  return c*n

def histogram(l):
  for n in l:
    print('*'*n)

def my_max_in_list(l):
  result = l[0]
  for i in l:
    if i > result:
      result = i
  return result

# --using args--
# def my_max(*nums):
#   result = nums[0]
#   for i in nums:
#     if i > result:
#       result = i
#   return result

def len_of_words(lofs):
  return [len(i) for i in lofs]

def len_of_longest(lofs):
  return my_max_in_list([len(i) for i in lofs])

def filter_long_words(lofs,n):
  return [s for s in lofs if len(s) > n]

def sentence_is_palindrome(s):
  s_list = [i.lower() for i in s if i not in " ,!?"]
  for i in range(len(s_list)):
    if s_list[i] != s_list[-i-1]:
      return False
  return True

def is_pangram(s):
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  pang = ""
  for i in s:
    if i in alphabet and i not in pang:
      pang += i
  if len(pang) == len(alphabet):
    return True
  return False

def ninety_nine_bottles():
  for i in range(99,0,-1):
    print(f"{i} bottles of beer on the wall, {i} bottles of beer.")
    print(f"Take one down, pass it around, {i-1} bottles of beer on the wall")

def my_translator(l):
  dict = {'hello': 'yellow', 'world': 'mold'}
  translated = l
  for i, word in enumerate(translated):
    for k,v in dict.items():
      if word == k:
        translated[i] = v
  return translated

