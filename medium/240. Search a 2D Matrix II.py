# 240. Search a 2D Matrix II

# 1
class Solution:
  def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
    row, col = len(matrix) - 1, 0

    while row >= 0 and col < len(matrix[0]):
      if matrix[row][col] < target:
        col += 1
      elif matrix[row][col] > target:
        row -= 1
      else:
        return True
    return False