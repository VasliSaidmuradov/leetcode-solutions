# 2278. Percentage of Letter in String

# 1
class Solution:
  def percentageLetter(self, s: str, letter: str) -> int:
    counter = 0

    for i in s:
      if i == letter :
        counter += 1

    return counter * 100 // len(s)