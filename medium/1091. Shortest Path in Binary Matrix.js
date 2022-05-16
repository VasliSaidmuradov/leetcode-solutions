// 1091. Shortest Path in Binary Matrix

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
// The length of a clear path is the number of visited cells of this path.

 

// Example 1:


// Input: grid = [[0,1],[1,0]]
// Output: 2
// Example 2:


// Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
// Output: 4
// Example 3:

// Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
// Output: -1
 

// Constraints:

// n == grid.length
// n == grid[i].length
// 1 <= n <= 100
// grid[i][j] is 0 or 1

// #1
// Solution from https://leetcode.com/problems/shortest-path-in-binary-matrix/discuss/1984334/Javascript-BFS
const shortestPathBinaryMatrix = function(grid) {
  const m = grid.length-1
  const n = grid[0].length-1
  if (grid[m][n] || grid[0][0]) return -1

  let q = [[0,0]]
  const seen = new Set()
  let count = 1
  const dir = [
    [-1,0], [1,0], [0,-1], [0,1],
    [1,-1], [1,1], [-1,1], [-1,-1]
  ]
  while (q.length) {
    const next = []     

    for (const [row,col] of q) { // loop through q level
      const temp = `${row}-${col}`
      if (seen.has(temp)) continue
      seen.add(temp)      
      grid[row][col] = count

      for (const [x, y] of dir) { // loop through directions
        const r = row + x
        const c = col + y        
        if (r < 0||r >= grid.length || c < 0 || c >= grid[r].length) continue
        if (grid[r][c]) continue
        next.push([r,c])        
      }
    }      
    count++
    q = next
  }

  // if it's still 0, then it could not be reached
  return grid[m][n] > 0 ? grid[m][n] : -1
};

// #2
class Node {
  constructor(row, col, length){
    this.row = row
    this.col = col
    this.length = length
    this.next = null
  }
}

class Frontier {
  constructor(row, col, length) {
    let node = new Node(row,  col, length)
    this.head = node
    this.tail = node
  }

  empty() {
    return this.head === null
  }

  get() {
    let ret = this.head
    this.head = this.head.next
    if (this.head === null){
      this.tail = null
    }
    return ret
  }

  put(row,col, length) {
    let node = new Node(row, col, length)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
}

const shortestPathBinaryMatrix2 = function(grid) {
  let ROWS = grid.length
  let COLS = grid.length

  if(grid[ROWS-1][COLS-1] === 1 || grid[0][0] === 1){
    return -1
  }

  let frontier = new Frontier(0,0,1)
  grid[0][0] = 1
  let minPath = Number.MAX_SAFE_INTEGER
  let dir = [[-1,-1],[0,-1],[-1,0],[1,0],[0,1],[1,-1],[-1,1],[1,1]]
  while (!frontier.empty()) {
    let curr = frontier.get()
    let row = curr.row
    let col = curr.col

    if (row === ROWS -1 && col == COLS -1 ) {
      return curr.length
    }

    for (let [r, c] of dir) {
      let colc = col+c
      let rowr = row+r
      if (rowr >= 0 && colc >= 0 && rowr < ROWS && colc < COLS) {
        if (grid[rowr][colc] === 0) {
          grid[rowr][colc] = 1
          frontier.put(rowr,colc, curr.length+1)
        }
      }
    }
  }

  return -1
};