// 1337. The K Weakest Rows in a Matrix

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.


// Example 1:

// Input: mat = 
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]], 
// k = 3
// Output: [2,0,3]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 2 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 2 
// - Row 4: 5 
// The rows ordered from weakest to strongest are [2,0,3,1,4].
// Example 2:

// Input: mat = 
// [[1,0,0,0],
//  [1,1,1,1],
//  [1,0,0,0],
//  [1,0,0,0]], 
// k = 2
// Output: [0,2]
// Explanation: 
// The number of soldiers in each row is: 
// - Row 0: 1 
// - Row 1: 4 
// - Row 2: 1 
// - Row 3: 1 
// The rows ordered from weakest to strongest are [0,2,3,1].
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 2 <= n, m <= 100
// 1 <= k <= m
// matrix[i][j] is either 0 or 1.


/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

// Solutions: 


// #1
const kWeakestRows1 = function(mat, k) {
  const arr = mat.map((item, idx) => ({idx, sum: item.reduce((acc, el) => acc + el)}))

  const res = []
  arr.sort((a, b) => a.sum - b.sum)

  for (let j = 0; j < k; j++) {
    res.push(arr[j].idx)
  }

  return res
}

// #2
const kWeakestRows2 = function(mat, k) {
  const input = mat.map((current, index) => {
    return ({index, power: current.join('').replaceAll('0', '').length});
  });

  input.sort((a, b) => {
    return a.power === b.power ? a.index - b.index : a.power - b.power;
  });

  return input.slice(0, k).map(({ index }) => index);
}

// #3
const kWeakestRows3 = function(mat, k) {
  const soldiers = []
  const res = []

  for (let i = 0; i < mat.length; i++) {
    let count = 0

    for (let a of mat[i]) {
      if (a) count++
    }

    soldiers.push({idx: i, count})
  }

  soldiers.sort((a, b) => a.count - b.count)

  for (let i = 0; i < k; i++) {
    res.push(soldiers[i].idx)
  }

  return res
}