# 118. Pascal's Triangle

# 1
class Solution:
  def generate(self, numRows: int) -> List[List[int]]:
    res = [[1]]

    for i in range(1, numRows):
      prevRow = res[i-1]
      newRow = [1]

      for j in range(1, i):
        newRow.append(prevRow[j-1] + prevRow[j])

      newRow.append(1)
      res.append(newRow)

    return res