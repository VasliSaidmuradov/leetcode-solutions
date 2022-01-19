// 137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.


/**
 * @param {number[]} nums
 * @return {number}
 */

// #1
const singleNumber = function(nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }

  for (prop in obj) {
    if (obj[prop] === 1) return prop
  }
}

// #2
const singleNumber = function(nums) {
  let ones = 0, twos = 0

  for (const n of nums) {
    ones = ones^n & ~twos
    twos = twos^n & ~ones
  }

  return ones
}