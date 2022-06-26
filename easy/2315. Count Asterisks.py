# 1
def countAsterisks(self, s: str) -> int:
  return sum([a.count('*') for a in s.split('|')][0::2])

# 2
def countAsterisks(self, s: str) -> int:
  bar_even, star = True, 0
  for c in s:
    if c == '|':
      bar_even = not bar_even
    elif c == '*' and bar_even:
      star += 1   
  return star