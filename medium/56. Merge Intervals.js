// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104


/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// #1
const merge = function(ints) {
  ints.sort((a, b) => a[0] - b[0])

  const res = [ints[0]]

  for (let i = 1; i < ints.length; i++) {
    const cur = ints[i]
    const prev = res[res.length - 1]

    if (prev[1] < cur[0]) {
      res.push(cur)
    } else {
      //Обновляем конец последнего интервал в result на Math.max(endPrevious, endCurrent)
      res[res.length - 1][1] = Math.max(prev[1], cur[1])
    }
  }

  return res
}

// #2
const merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])

  let res = []

  res.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
    let prev = res.pop()
    let current = intervals[i]

    if (current[0] <= prev[1]) {
      res.push([prev[0], Math.max(prev[1], current[1])])
    } else {
      res.push(prev)
      res.push(current)
    }
  }

  return res
}

// #3
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let min = intervals[0][0]
  let max = 0
  let res = []

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] > max) {
      min = intervals[i][0]
    }

    max = Math.max(intervals[i][1], max)
    const lastRes = res[res.length-1]
    if (lastRes && min === lastRes[0] && max >= lastRes[1]) {
      res.pop()
    }

    res.push([min, max])
  }

  return res
}