# 1647. Minimum Deletions to Make Character Frequencies Unique

# 1
class Solution:
  def minDeletions(self, s: str) -> int:
    freq = [0] * 26

    for ch in s:
      freq[ord(ch) - ord('a')] += 1

    count = 0
    hash_set = set()
        
    for i in range(26):
      while freq[i] > 0 and freq[i] in hash_set:
        freq[i] -= 1
        count += 1
      hash_set.add(freq[i])

    return count