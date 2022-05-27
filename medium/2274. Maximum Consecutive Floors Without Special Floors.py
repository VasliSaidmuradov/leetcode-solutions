# 2274. Maximum Consecutive Floors Without Special Floors

# 1
class Solution:
  def maxConsecutive(self, bottom: int, top: int, special: List[int]) -> int:
    spF = [bottom-1]+sorted(special)+[top+1]
    return max([spF[i]-spF[i-1] for i in range(1,len(spF))])-1

# 2
class Solution:
  def maxConsecutive(self, bottom: int, top: int, special: List[int]) -> int:
    special = [bottom - 1] + sorted(special) + [top +1]
    maxCon = 0
    for i in range(1, len(special)):
      curMax = special[i] - special[i - 1] - 1
      if curMax > maxCon:
        maxCon = curMax
    return maxCon