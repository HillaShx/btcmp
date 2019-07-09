quote = "one two three"
vowels = "aeiou"

def vowels_by_index(quo):
  return [i for i,c in enumerate(quo) if c in vowels]

print(vowels_by_index(quote))