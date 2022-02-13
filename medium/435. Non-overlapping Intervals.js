// 435. Non-overlapping Intervals

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Constraints:

// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104


/**
 * @param {number[][]} intervals
 * @return {number}
 */


// #1 
const eraseOverlapIntervals = function(ints) {
  ints.sort((a, b) => a[1] - b[1])

  let count = 0
  let prev = ints[0]

  for (let i = 1 ; i < ints.length; i++) {
    const cur = ints[i]

    if (prev[1] > cur[0])	{
      count++
    } else {
      prev = cur
    }
  }

  return count
}

// #2
const eraseOverlapIntervals = function(ints) {
  ints.sort((a, b) => a[1] - b[1])

  let count = 0
  const stack = [ints[0]]

  for (let i = 1 ; i < ints.length; i++) {
    const lastInStack = stack[stack.length - 1]
    const cur = ints[i]

    if (lastInStack[1] <= cur[0]) {
      stack.push(cur)
    } else {
      count++
    }
  }

  return count
}

// #3
function eraseOverlapIntervals (intervals) {
  intervals.sort((a,b) =>a[0] - b[0])
  let count = 0

  for (let i = 0; i < intervals.length - 1; i++) {
    const left = intervals[i]
    const right = intervals[i + 1]

    if (left[1] > right[0]) {
      count++;
      if (right[1] >= left[1]) {
        intervals[i + 1] = intervals[i]
      }
    }
  }

  return count
}