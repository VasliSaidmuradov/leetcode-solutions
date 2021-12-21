// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6
 

// Constraints:

// 3 <= nums.length <= 104
// -1000 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions:

// #1
const maximumProduct = function(nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length

  if (nums[0] < 0 && nums[1] < 0 && nums[len - 1] > 0 && (Math.abs(nums[0]) * Math.abs(nums[1])) > (Math.abs(nums[len - 2]) * Math.abs(nums[len - 3]))) {
    return nums[0] * nums[1] * nums[len - 1]
  }

  return nums[len - 1] * nums[len - 2] * nums[len - 3]
}

// #2
const maximumProduct = function(nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length

  return Math.max(nums[0] * nums[1] * nums[len - 1], nums[len - 1] * nums[len - 2] * nums[len - 3])
}
