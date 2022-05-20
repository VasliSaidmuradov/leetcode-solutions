// 63. Unique Paths II


// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

 

// Example 1:


// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1
 

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.


// Official leetcode solution

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

const uniquePathsWithObstacles = function(obstacleGrid) {
  let row = obstacleGrid.length
  let col = obstacleGrid[0].length

  if (obstacleGrid[0][0] === 1) return 0

  obstacleGrid[0][0] = 1

  for (let r = 1; r < row; r++) {
    obstacleGrid[r][0] = (obstacleGrid[r][0] === 0 && obstacleGrid[r - 1][0] === 1) ? 1 : 0
  }

  for (let c = 1; c < col; c++) {
    obstacleGrid[0][c]  = (obstacleGrid[0][c] === 0 && obstacleGrid[0][c - 1] === 1) ? 1 : 0 
  }

  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      if (obstacleGrid[r][c] === 0) {
        obstacleGrid[r][c] = obstacleGrid[r - 1][c] + obstacleGrid[r][c - 1]
      } else {
        obstacleGrid[r][c] = 0
      }
    }
  }

  return obstacleGrid[row - 1][col - 1]
};


// PYTHON 3:
// class Solution:
//     def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
//         row = len(obstacleGrid)
//         col = len(obstacleGrid[0])
        
//         if obstacleGrid[0][0] == 1:
//             return 0
        
//         obstacleGrid[0][0] = 1
        
//         for r in range(1, row):
//             obstacleGrid[r][0] = int(obstacleGrid[r][0] == 0 and obstacleGrid[r - 1][0] == 1)
            
//         for c in range(1, col):
//             obstacleGrid[0][c] = int(obstacleGrid[0][c] == 0 and obstacleGrid[0][c - 1] == 1)
            
//         for r in range(1, row):
//             for c in range(1, col):
//                 if obstacleGrid[r][c] == 0:
//                     obstacleGrid[r][c] = obstacleGrid[r - 1][c] + obstacleGrid[r][c - 1]
//                 else:
//                     obstacleGrid[r][c] = 0
        
//         return obstacleGrid[row - 1][col - 1]