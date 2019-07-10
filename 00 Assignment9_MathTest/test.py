from random import randint, choice

def problem_generator():
  num1 = randint(0,10)
  num2 = randint(0,10)
  operator = choice('+-*/')
  if operator == '/':
    num2 = randint(1,10)
    result = int(num1/num2)
  elif operator == '*':
    result = num1*num2
  elif operator == '-':
    result = num1-num2
  else:
    result = num1+num2
  printable = f'{num1} {operator} {num2}'
  print(f'{printable} = ?')
  return printable,result

def get_user_answer():
  invalid_input = True
  while invalid_input:
    try:
      ans = int(input())
    except:
      print('invalid input!')
    else:
      invalid_input = False
  return ans

def answered_correctly(result,answer):
  return result == answer

def will_continue():
  user_input = input('would you like to continue? ')
  if user_input.lower() in ['yes','y']:
    return True
  elif user_input.lower() in ['no','n','']:
    return False
  else:
    print('invalid input!')
    will_continue()

def game():
  keep_playing = True
  overall_rounds = 0
  successful_rounds = 0
  wrong_answers = []
  while keep_playing:
    problem,result = problem_generator()
    user_answer = get_user_answer()
    if answered_correctly(result,user_answer):
      successful_rounds+=1
    else:
      wrong_answers.append({"prob": problem, "ans": user_answer, "res": result})
    if not will_continue():
      keep_playing = False
    overall_rounds+=1
  print(f'Here\'s what you got wrong:')
  for i in wrong_answers:
    print(f'{i["prob"]} = {i["ans"]} ({i["res"]})')
  print(f'You have answered {successful_rounds} correctly out of {overall_rounds} ({round(successful_rounds*(100/overall_rounds))}%)')

game()