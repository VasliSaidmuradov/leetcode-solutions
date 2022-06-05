# 2295. Replace Elements in an Array

class Solution:
  def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
    hashMap = { num: i for i, num in enumerate(nums) }
    for oldVal, newVal in operations:
      idx = hashMap[oldVal]
      nums[idx] = newVal
      hashMap[newVal] = idx
    return nums