import random

class Pokemon:
  def __init__(self):
    self.hp = random.randint(1,6)
    self.attack = random.randint(1,6)
    self.defense = random.randint(1,6)
    self.is_fainted = False
    # zero == 0, ofive == 0.5, two == 2, everything else == 1
    self.attack_effectiveness = {
      'normal': {'0':['ghost'],'0.5':['rock','steel',],'2':[]},
      'fighting': {'0':['ghost'],'0.5':['flying','poison','bug', 'psychic', 'fairy'], '2':['normal','rock','steel','ice','dark']},
      'flying': {'0':[],'0.5':['rock','steel','electic'],'2':['fighting','bug','grass']},
      'poison': {'0':['steel'],'0.5':['poison','ground','rock','ghost'],'2':['grass','fairy']},
      'ground': {'0':['flying'],'0.5':['bug','grass'],'2':['poison','rock','steel','fire','electric']},
      'rock': {'0':[],'0.5':['fighting','ground','steel'],'2':['flying','bug','fire','ice']},
      'bug': {'0':[],'0.5':['fighting','flying','poison','ghost','steel','fire','fairy'],'2':['grass','psychic','dark']},
      'ghost': {'0':['normal'],'0.5':['dark'],'2':['ghost','psychic']},
      'steel': {'0':[],'0.5':['steel','fire','water','electric'],'2':['rock','ice','fairy']},
      'fire': {'0':[],'0.5':['rock','fire','water','dragon'],'2':['bug','steel','grass','ice']},
      'water': {'0':[],'0.5':['water','grass','dragon'],'2':['ground','rock','fire']},
      'grass': {'0':[],'0.5':['flying','poison','bug','steel','fire','grass','dragon'],'2':['ground','rock','water']},
      'electric': {'0':['ground'],'0.5':['grass','electric','dragon'],'2':[]},
      'psychic': {'0':['dark'],'0.5':['steel','psychic'],'2':['fighting','poison']},
      'ice': {'0':[],'0.5':['steel','fire','water','ice'],'2':['flying','ground','grass','dragon']},
      'dragon': {'0':['fairy'],'0.5':['steel'],'2':['dragon']},
      'dark': {'0':[],'0.5':['fighting','dark','fairy'],'2':['ghost','psychic']},
      'fairy': {'0':[],'0.5':['poison','steel','fire'],'2':['fighting','dragon','dark']}
    }

  def get_attack_effectiveness(self, opponent):
    effectiveness = 1
    num_of_matches = 0
    for op_type in opponent.get_types():
      for my_type in self.get_types():
        for k,v in self.attack_effectiveness[my_type].items():
          if op_type in v:
            if k == '0':
              return 0
            else:
              num_of_matches+=1
              effectiveness+=float(k)
      if num_of_matches > 0:
        return effectiveness / num_of_matches
      else:
        return effectiveness
  
  def initiate_attack(self, opponent):
    my_attack = (self.attack + random.randint(1,4))*self.get_attack_effectiveness(opponent)
    opponents_defense = (opponent.defense + random.randint(1,4))
    attack_delta = my_attack-opponents_defense
    self.get_cry()
    if my_attack == 0 or attack_delta < 1:
      print('the attack was ineffective')
    elif my_attack > opponents_defense:
      opponent.hp -= my_attack - opponents_defense
      if attack_delta > 4:
        print('the attack was super effective')
      else:
        print('the attack was effective')
      return True

    if opponent.hp <= 0:
      opponent.is_fainted = True
    return False
    