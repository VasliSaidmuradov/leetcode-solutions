// 498. Diagonal Traverse

// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

 

// Example 1:


// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
// Example 2:

// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 104
// 1 <= m * n <= 104
// -105 <= mat[i][j] <= 105


/**
 * @param {number[][]} mat
 * @return {number[]}
 */

// #1
const findDiagonalOrder1 = function(mat) {
  const obj = {}
  const res = []

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (obj[i + j])
        obj[i + j].push(mat[i][j])
      else
        obj[i + j] = [mat[i][j]]
    }
  }

  for (let prop in obj) {
    if (prop % 2 === 0) {
    res.push(...obj[prop].reverse())
    } else {
    res.push(...obj[prop])
    }
  }

  return res
}

// #2
const findDiagonalOrder2 = function (mat) {
  // edge cases
  if (mat == null || mat.length == 0) return new int[0]();

  let row = 0
  let col = 0
  let pos = 0
  let m = mat.length
  let n = mat[0].length
  let output = Array(m * n).fill(0)

  // go through every element of matrix once
  for (pos = 0; pos < m * n; pos++) {
    output[pos] = mat[row][col]

    if ((row + col) % 2 == 0) {
      // The direction is always up when the sum of row & col is even

      // For last column, go down
      if (col == n - 1) {
        row++
      }

      // For first row & non-last columns, go right
      else if (row == 0) {
        col++
      }

      // For not first row & non-last columns, go up and to the right
      else {
        row--
        col++
      }
    } else {
      // The direction is always down when the sum of row & col is odd

      // For last row, go right
      if (row == m - 1) {
        col++
      }

      //  For non-last row & first column, go down
      else if (col == 0) {
        row++
      }

      // For non-last row & non-first column, go down and to the left
      else {
        row++
        col--
      }
    }
  }

  return output
}