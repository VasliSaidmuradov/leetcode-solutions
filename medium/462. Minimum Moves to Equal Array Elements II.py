# 462. Minimum Moves to Equal Array Elements II

# 1
class Solution:
  def minMoves2(self, nums: List[int]) -> int:
    sorted_nums = sorted(nums)
    med = sorted_nums[int(len(sorted_nums) / 2)]
    res = 0
    for n in sorted_nums: 
      res += abs(n - med)
    return res


# 2
class Solution:
  def minMoves2(self, nums: List[int]) -> int:
    sorted_nums = sorted(nums)
    res = 0
    l = 0
    r = len(nums) - 1
    while l <= r: 
      res += sorted_nums[r] - sorted_nums[l]
      l += 1
      r -= 1
    return res