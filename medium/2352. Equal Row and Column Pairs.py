# 2352. Equal Row and Column Pairs

# https://leetcode.com/problems/equal-row-and-column-pairs/

# 1
class Solution:
  def equalPairs(self, grid: List[List[int]]) -> int:
    hash = {}
    ans = 0

    for r in range(len(grid)):
      key = ''
      for c in range(len(grid)):
        key += '#' + str(grid[r][c])

      if key in hash:
        hash[key] += 1
      else:
        hash[key] = 1

    for r in range(len(grid)):
      key = ''
      for c in range(len(grid)):
        key += '#' + str(grid[c][r])

      if key in hash:
        ans += hash[key]

    return ans