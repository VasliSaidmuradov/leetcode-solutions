# 2351. First Letter to Appear Twice
# https://leetcode.com/contest/weekly-contest-303/problems/first-letter-to-appear-twice/

# 1
class Solution:
  def repeatedCharacter(self, s: str) -> str:
    letters = [0] * 26

    for i in s:
      idx = ord(i) - ord('a')
      if letters[idx] == 1:
        return i
      letters[idx] += 1

# 2
class Solution:
  def repeatedCharacter(self, s: str) -> str:
    hashSet = set()

    for ch in s:
      if ch in hashSet:
        return ch
      hashSet.add(ch)