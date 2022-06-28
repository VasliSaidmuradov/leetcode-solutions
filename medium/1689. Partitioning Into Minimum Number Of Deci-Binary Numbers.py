# 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

# 1
class Solution:
  def minPartitions(self, n: str) -> int:
    return max(i for i in n)

# 2
class Solution:
  def minPartitions(self, n: str) -> int:
    if "9" in n:return 9
    if "8" in n:return 8
    if "7" in n:return 7
    if "6" in n:return 6
    if "5" in n:return 5
    if "4" in n:return 4
    if "3" in n:return 3
    if "2" in n:return 2
    if "1" in n:return 1

# 3
class Solution:
  def minPartitions(self, n: str) -> int:
    count = 9
    while count > 0:
      if str(count) in n:
        return count
      count -= 1
    return count

# 4
class Solution:
  def minPartitions(self, n: str) -> int:
    for i in range(9, -1, -1):
      if str(i) in n:
        return int(i)
