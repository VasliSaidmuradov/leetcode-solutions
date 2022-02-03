// 1351. Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
 

// Follow up: Could you find an O(n + m) solution?

/**
 * @param {number[][]} grid
 * @return {number}
 */

// #1
const countNegatives = function(grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) count++
    }
  }

  return count
}

// #2
const countNegatives = function(grid) {
  let count = 0

  for (const arr of grid) {
    for (const item of arr) {
      if (item < 0) count++
    }
  }

  return count
}

// #3
const countNegatives = function(grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        count += grid[i].length - j
        break
      }
    }
  }

  return count
}