// 304. Range Sum Query 2D - Immutable

// Given a 2D matrix matrix, handle multiple queries of the following type:

// Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
// Implement the NumMatrix class:

// NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
// int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 

// Example 1:


// Input
// ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
// [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
// Output
// [null, 8, 11, 12]

// Explanation
// NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// -105 <= matrix[i][j] <= 105
// 0 <= row1 <= row2 < m
// 0 <= col1 <= col2 < n
// At most 104 calls will be made to sumRegion.

// #1
/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
  const row = matrix.length
  const col = matrix[0].length
  this.mat = Array.from({length: row + 1}).map(item => new Array(col + 1).fill(0));
  for (let r = 1; r <= matrix.length; r++) {
    for (let c = 1; c <= matrix[0].length; c++) {
      const right = this.mat[r - 1][c]
      const left = this.mat[r][c - 1]
      const cur = matrix[r - 1][c - 1]
      const above = this.mat[r - 1][c - 1]
      this.mat[r][c] = right + left + cur - above
    }
  }
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.mat[row2 + 1][col2 + 1] - this.mat[row1][col2 + 1] - this.mat[row2 + 1][col1] + this.mat[row1][col1]
};