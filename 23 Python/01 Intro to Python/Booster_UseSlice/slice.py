msg = "Hello, my name is Inigo Montoya"

def slice_str(s):
  print(s[:5])
  print(s[7:14])
  every_other_char = s[0]+s[2]+s[4]+s[6]+s[8]+s[10]+s[12]+s[14]+s[16]+s[18]+s[20]+s[22]+s[24]+s[26]+s[28]+s[30]
  print(every_other_char)
  # just trying to test out other options, ny python is a little rusty
  # every_other_char = ""
  # for i in range(len(s)):
  #   if i % 2 == 0:
  #     every_other_char += s[i]
  # print(every_other_char)
  print(every_other_char[1:-6])

slice_str(msg)