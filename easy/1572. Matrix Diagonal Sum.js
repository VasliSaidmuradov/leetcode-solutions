// 1572. Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

 

// Example 1:


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5
 

// Constraints:

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100


// #1
const diagonalSum1 = function(mat) {
  let sum = 0

  for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
    sum += mat[i][i] + mat[i][j]
  }

  if (mat.length % 2) {
    let mid = (mat.length - 1) / 2
    sum -= mat[mid][mid]
  }

  return sum
}

// #2
const diagonalSum2 = function(mat) {
  let sum = 0

  for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
    sum += i !== j ? mat[i][i] + mat[i][j] : mat[i][i]
  }

  return sum
}

// #3
const diagonalSum3 = function(mat) {
  let i = 0
  let len = mat.length
  let k = len - 1
  let sum = 0
  let mid = Math.floor( k / 2)

  while (i < len) {
    sum += mat[i][j] + mat[i][k]
    i++
    k--
  }

  return len % 2 ? sum - mat[mid][mid] : sum
}

// #4
const diagonalSum = function(mat) {
  return mat.reduce((acc, arr, idx) => {
    return acc + ( idx !== arr.length - 1 - idx ? arr[idx] + arr[arr.length - 1 - idx] : arr[idx])
  }, 0)
}