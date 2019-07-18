from entities.pokemon import Pokemon

# How can I get the types and the cry on a higher level (from a parent class)?

class Gengar(Pokemon):
  def __init__(self):
    super().__init__()
    self.__types = ['ghost','poison']
    self.__cry = 'gengarrrr'

  def get_types(self):
    return self.__types

  def get_cry(self):
    print(self.__cry)

  def __repr__(self):
    return 'Gengar'

class Cleffa(Pokemon):
  def __init__(self):
    super().__init__()
    self.__types = ['fairy']
    self.__cry = 'cleffaaaaa'

  def get_types(self):
    return self.__types

  def get_cry(self):
    print(self.__cry)

  def __repr__(self):
    return 'Cleffa'

class Happiny(Pokemon):
  def __init__(self):
    super().__init__()
    self.__types = ['normal']
    self.__cry = 'hapinyyyyy'

  def get_types(self):
    return self.__types

  def get_cry(self):
    print(self.__cry)

  def __repr__(self):
    return 'Happiny'

class Mimikyu(Pokemon):
  def __init__(self):
    super().__init__()
    self.__types = ['ghost','fairy']
    self.__cry = 'mimikyuuuuuu'

  def get_types(self):
    return self.__types

  def get_cry(self):
    print(self.__cry)

  def __repr__(self):
    return 'Mimikyu'

class Budew(Pokemon):
  def __init__(self):
    super().__init__()
    self.__types = ['grass','poison']
    self.__cry = 'budewwwww'

  def get_types(self):
    return self.__types

  def get_cry(self):
    print(self.__cry)

  def __repr__(self):
    return 'Budew'

class Togepi(Pokemon):
  def __init__(self):
    super().__init__()
    self.__types = ['fairy']
    self.__cry = 'togepiiii'

  def get_types(self):
    return self.__types

  def get_cry(self):
    print(self.__cry)

  def __repr__(self):
    return 'Togepi'