from entities.poketypes import *

m1 = Mimikyu()
b2 = Budew()

def battle(pk1,pk2):
  is_on = True
  print(f'{pk1} vs {pk2}')
  while is_on:
    pk1.initiate_attack(pk2)
    if pk2.is_fainted:
      is_on = False
      print(f'{pk1} has won!')
      break
    pk2.initiate_attack(pk1)
    if pk1.is_fainted:
      is_on = False
      print(f'{pk2} has won!')
    


battle(m1,b2)
