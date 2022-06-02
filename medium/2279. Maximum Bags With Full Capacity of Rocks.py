# 2279. Maximum Bags With Full Capacity of Rocks

# 1
class Solution:
  def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
    remain = sorted([x - y for x, y in zip(capacity, rocks)])
    ans = 0
    for i in remain:
      if additionalRocks < i:
        break
      ans += 1
      additionalRocks -= i
    return ans

# 2
class Solution:
  def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
    diff = []
    for i in range(len(capacity)):
      diff.append(capacity[i] - rocks[i])
    diff.sort()
    i = 0
    while i < len(diff):
      if additionalRocks < diff[i]:
        break
      additionalRocks -= diff[i]
      i += 1
    return i