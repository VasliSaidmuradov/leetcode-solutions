# 287. Find the Duplicate Number

# 1
class Solution:
  def findDuplicate(self, nums: List[int]) -> int:
    s, f = 0, 0

    while True:
      s = nums[s]
      f = nums[nums[f]]
      if s == f:
        break

    s2 = 0

    while True:
      s = nums[s]
      s2 = nums[s2]
      if s == s2:
        return s


# 2
class Solution:
  def findDuplicate(self, nums: List[int]) -> int:
    hashSet = set()

    for n in nums:
      if n in hashSet:
        return n
      hashSet.add(n)