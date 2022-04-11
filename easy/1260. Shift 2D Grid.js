// 1260. Shift 2D Grid

// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

 

// Example 1:


// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]
// Example 2:


// Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
// Example 3:

// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
// Output: [[1,2,3],[4,5,6],[7,8,9]]
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m <= 50
// 1 <= n <= 50
// -1000 <= grid[i][j] <= 1000
// 0 <= k <= 100


/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

// #1
const shiftGrid = function(grid, k) {
  let i = 0
  let n = grid.length

  if (n === 1) {
    for (let i = 0; i < k; i++) {
      grid[0].unshift(grid[0].pop())
    }
  } else {
    while (i < k) {
      for (let i = 0; i < n - 1; i++) {
        grid[i + 1].unshift(grid[i].pop())
        if (i === 0) grid[i].unshift(grid[n-1].pop())
      }
      i++
    }
  }

  return grid
}