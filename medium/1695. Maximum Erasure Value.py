# 1695. Maximum Erasure Value

# 1
class Solution:
  def maximumUniqueSubarray(self, nums: List[int]) -> int:
    hash_set = {}
    max_val = 0
    temp_val = 0
    l = 0

    for r in range(len(nums)):
      num = nums[r]
      temp_val += num

      while num in hash_set:
        del hash_set[nums[l]]
        temp_val -= nums[l]
        l += 1

      max_val = max(max_val, temp_val)
      hash_set[num] = num

    return max_val


# 2
class Solution:
  def maximumUniqueSubarray(self, nums: List[int]) -> int:
    hash_set = set()
    max_val = 0
    temp_val = 0
    l = 0

    for r in range(len(nums)):
      num = nums[r]
      temp_val += num

      while num in hash_set:
        hash_set.remove(nums[l])
        temp_val -= nums[l]
        l += 1

      max_val = max(max_val, temp_val)
      hash_set.add(num)

    return max_val