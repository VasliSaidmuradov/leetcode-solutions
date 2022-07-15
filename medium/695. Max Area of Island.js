// 695. Max Area of Island

/**
 * @param {number[][]} grid
 * @return {number}
 */

// #1
const maxAreaOfIsland = function(grid) {
  let ans = 0
  const seen = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));
  const area = (r, c) => {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0 || seen[r][c]) {
      return 0
    }
    seen[r][c] = true
    return (1 + area(r, c-1) + area(r, c+1) + area(r-1, c) + area(r+1, c))
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      ans = Math.max(ans, area(r,c))
    }
  }

  return ans
};