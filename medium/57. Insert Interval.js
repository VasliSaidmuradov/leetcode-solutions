// 57. Insert Interval

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

// Constraints:

// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// #1
const insert = function(intervals, newInterval) {
  return merge([...intervals, newInterval])
}

const merge = function(ints) {
  ints.sort((a, b) => a[0] - b[0])

  const res = [ints[0]]

  for (let i = 1; i < ints.length; i++) {
    const cur = ints[i]
    const prev = res[res.length - 1]

    if (prev[1] < cur[0]) {
      res.push(cur)
    } else {
      res[res.length - 1][1] = Math.max(prev[1], cur[1])
    }
  }

  return res
}

// #2
const insert = function(intervals, newInterval) {
  let [start, end] = newInterval
  const res = []

  for (let i = 0; i < intervals.length; i++) {
    if (start > intervals[i][1]) {
      res.push(intervals[i]);
    } else if (end < intervals[i][0]) {
      res.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    } else {
      start = Math.min(start, intervals[i][0]); // 3
      end = Math.max(end, intervals[i][1]);			// 10
    }
  }

  res.push([start, end])

  return res
}