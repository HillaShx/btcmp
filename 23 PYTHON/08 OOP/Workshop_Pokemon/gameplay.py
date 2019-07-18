from entities.poketypes import *

m1 = Mimikyu()
b2 = Budew()

def battle(pk1,pk2):
  is_on = True
  pokes = (pk1,pk2)
  print(f'{pk1} vs {pk2}')
  while is_on:
    for i in range(len(pokes)):
      pokes[i].initiate_attack(pokes[i-1])
      print(f'{pokes[i-1]}\'s hp: {pokes[i-1].hp}')
      if pokes[i-1].is_fainted:
        print(f'{pokes[i]} has won!')
        return
  

battle(m1,b2)
