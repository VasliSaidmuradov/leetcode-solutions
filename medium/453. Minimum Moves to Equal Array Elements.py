# 453. Minimum Moves to Equal Array Elements

# 1
class Solution:
  def minMoves(self, nums: List[int]) -> int:
    return sum(nums) - min(nums)*len(nums)


# 2
class Solution:
  def minMoves(self, nums: List[int]) -> int:
    mi = min(nums)
    ans = 0
    for x in nums:
      ans += x - mi
    return ans

# 3
class Solution:
  def minMoves(self, nums: List[int]) -> int:
    min_elem = nums[0]
    sum = min_elem

    for i in range(len(nums) - 1):
      sum += nums[i + 1]
      min_elem = min(min_elem, nums[i + 1])

    return sum - len(nums) * min_elem