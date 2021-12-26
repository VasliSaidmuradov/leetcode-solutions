// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.
 

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions: 

// #1
const findGCD = function(nums) {
  let min = 1000 // Infinity
  let max = 1  // -Infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i]
    if (nums[i] > max) max = nums[i]
  }

  let res = min

  while (res > 0) {
    if (min % res === 0 && max % res === 0) return res

    res--
  }
}

// #2
const findGCD = function(nums) {
  let min = Math.min(...nums)
  let max = Math.max(...nums)

  for (let i = min; i > 0; i--) {
    if (min % i === 0 && max % i === 0) return i
  }
}