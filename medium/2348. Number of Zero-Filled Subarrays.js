// 2348. Number of Zero-Filled Subarrays

// https://leetcode.com/contest/biweekly-contest-83/problems/number-of-zero-filled-subarrays/

// #1
const zeroFilledSubarray = function(nums) {
  let temp = 0
  let count = 0


  for (let num of nums) {
    if (num === 0) {
      temp++
      count += temp
    } else {
      temp = 0
    }
  }
  return count
};