// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// #1
const searchMatrix = function(matrix, target) {
  let ans = false
  let n = matrix[0].length

  for (let i = 0; i < matrix.length; i++) {
    if (target <= matrix[i][n - 1]) {
      return binarySearch(matrix[i], target)
    }
  }

  return ans
}

const binarySearch = (arr, num) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2)

    if (arr[mid] === num) {
      return true
    } else if (arr[mid] < num) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return false
}


// #2
const searchMatrix2 = function(matrix, target) {
  let rows = matrix.length
  let cols = matrix[0].length
  let left = 0
  let right = rows * cols - 1


  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midVal = matrix[Math.floor(mid / cols)][mid % cols]

    if (midVal === target) return true
    if (target < midVal) right = mid - 1
    else left = mid + 1
  }

  return false
}