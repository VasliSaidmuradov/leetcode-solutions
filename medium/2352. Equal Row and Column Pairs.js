// 2352. Equal Row and Column Pairs

// https://leetcode.com/problems/equal-row-and-column-pairs/

// #1
const equalPairs = function(grid) {
  const hashSet = {}
  const len = grid.length
  let count = 0

  for (let r = 0; r < len; r++) {
    let key = ''
    for (let c = 0; c < len; c++) {
      key += `-${grid[r][c]}`
    }
    hashSet[key] = (hashSet[key] || 0) + 1
  }

  for (let r = 0; r < len; r++) {
    let key = ''
    for (let c = 0; c < len; c++) {
      key += `-${grid[c][r]}`
    }

    if (key in hashSet) {
      count += hashSet[key]
    }
  }

  return count
};

// #2
const equalPairs2 = function(grid) {
  const hashSet = {}
  const hashSet2 = {}
  const len = grid.length
  const reversed = []
  let count = 0

  for (let r = 0; r < len; r++) {
    let key = ''
    for (let c = 0; c < len; c++) {
      key += `${grid[r][c]} `

      if (!reversed[c]) {
        reversed[c] = []
      }

      reversed[c][r] = grid[r][c]
    }
    key = key.trim()
    hashSet[key] = (hashSet[key] || 0) + 1
  }
  
  for (let r = 0; r < len; r++) {
    let key = ''
    for (let c = 0; c < len; c++) {
      key += reversed[r][c] + ' '
    }
    key = key.trim()
    hashSet2[key] = (hashSet2[key] || 0) + 1
  }
  
  for (let prop in hashSet) {
    if (prop in hashSet2) {
      count += hashSet[prop] * hashSet2[prop]
    }
  }

  return count
};