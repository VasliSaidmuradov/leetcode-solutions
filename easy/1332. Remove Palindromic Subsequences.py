# 1332. Remove Palindromic Subsequences

#1
class Solution:
  def removePalindromeSub(self, s: str) -> int:
    if s == s[-1::-1]:
      return 1

    return 2

#2
class Solution:
  def removePalindromeSub(self, s: str) -> int:
    l, r = 0, len(s) - 1

    while l < r:
      if s[l] != s[r]:
        return 2

      l += 1
      r -= 1

    return 1