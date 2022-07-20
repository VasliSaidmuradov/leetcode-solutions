# 792. Number of Matching Subsequences

# 1
class Solution:
  def numMatchingSubseq(self, s: str, words: List[str]) -> int:
    count = 0

    for word in words:
      isSubseq = True
      fromIdx = 0
      for ch in word:
        idx = s.find(ch, fromIdx)
        if idx == -1:
          isSubseq = False
          break
        fromIdx = idx+1

      if isSubseq:
        count += 1

    return count