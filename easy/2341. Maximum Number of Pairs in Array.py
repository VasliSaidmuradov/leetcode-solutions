# 2341. Maximum Number of Pairs in Array

# 1
class Solution:
  def numberOfPairs(self, nums: List[int]) -> List[int]:
    cnt = Counter(nums)
    c, r = 0, 0

    for i in cnt.values():
      c += i // 2
      r += i % 2

    return [c, r]

# 2
class Solution:
  def numberOfPairs(self, nums: List[int]) -> List[int]:
    cnt = Counter(nums)
    res = [0] * 2

    for i in cnt.values():
      res[0] += i // 2
      res[1] += i % 2

    return res

# 3
class Solution:
  def numberOfPairs(self, nums: List[int]) -> List[int]:
    cnt = Counter(nums)
    res = [0] * 2

    for i in cnt:
      res[0] += cnt[i] // 2
      res[1] += cnt[i] % 2

    return res