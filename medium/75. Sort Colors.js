// 75. Sort Colors

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// #1
const sortColors = function(nums) {
  let red = 0
  let white = 0
  let blue = 0

  for (const color of nums) {
    if (color === 0) red++
    else if (color === 1) white++
    else blue++
  }

  nums.splice(0, red, ...new Array(red).fill(0))
  nums.splice(red, white, ...new Array(white).fill(1))
  nums.splice(red + white, blue, ...new Array(blue).fill(2))
}


// #2
const sortColors = function(nums) {
  let zeros = ones = twos = 0
  let n = nums.length
  let i = 0

  for (; i < n; i++) {
    if (nums[i] === 0) zeros++
    else if (nums[i] === 1) ones++
    else twos++
  }

  for (i = 0; i < zeros; i++) {
    nums[i] = 0
  }

  for (i = zeros; i < ones + zeros; i++) {
    nums[i] = 1
  }

  for (i = zeros + ones; i < n; i++) {
    nums[i] = 2
  }

  return nums
}