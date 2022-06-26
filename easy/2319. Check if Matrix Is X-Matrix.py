# 2319. Check if Matrix Is X-Matrix

# 1
class Solution:
  def checkXMatrix(self, grid: List[List[int]]) -> bool:
    n = len(grid)

    for i in range(n):
      for j in range(n):
        if i == j or i + j == n -1:
          if grid[i][j] == 0:
            return False
        elif grid[i][j] != 0:
          return False

    return True