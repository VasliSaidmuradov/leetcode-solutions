// 240. Search a 2D Matrix II

// https://leetcode.com/problems/search-a-2d-matrix-ii/

// #1 - Mostly Time Limit Exceeded
const searchMatrix = function(matrix, target) {
  const rows = matrix.length
  const cols = matrix[0].length
  let lastIdx = cols
  for (let r = 0; r < rows; r++) {
    const row = matrix[r].slice(0, lastIdx)
    if (row[lastIdx-1] < target) {
      continue
    }
    let idx
    let start = 0
    let end = row.length - 1
    while (start <= end) {
      let mid = end - Math.floor((end - start) / 2)
      if (row[mid] === target) {
        idx = true
        break
      } else if (row[mid] < target) {
        start = mid+1
      } else {
        end = mid-1
      }
    }

    if (idx === true) {
      return true
    } else {
      lastIdx = end+1
    }
  }
  return false
};


// #2 Better solution
const searchMatrix2 = function(matrix, target) {
  let i = matrix.length - 1
  let j = 0

  while (i >= 0 && j >= 0 && j < matrix[0].length) {
    if (matrix[i][j] < target) j++
    else if (matrix[i][j] > target) i--
    else return true
  }
  
  return false
};