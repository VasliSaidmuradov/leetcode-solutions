# 2348. Number of Zero-Filled Subarrays

# 1
class Solution:
  def zeroFilledSubarray(self, nums: List[int]) -> int:
    cnt = temp = 0

    for num in nums:
      if num == 0:
        temp += 1
        cnt += temp
      else:
        temp = 0
    return cnt