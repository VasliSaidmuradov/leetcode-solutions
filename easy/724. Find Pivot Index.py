# 724. Find Pivot Index

# 1
class Solution:
  def pivotIndex(self, nums: List[int]) -> int:
    total_sum = sum(nums)
    left_sum = 0

    for i in range(len(nums)):
      if left_sum == total_sum - left_sum - nums[i]:
        return i
      left_sum += nums[i]

    return -1