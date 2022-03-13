// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true
// Example 3:

// Input: nums = [1,3,2]
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {boolean}
 */

// #1
const isMonotonic1 = function(nums) {
  let increasing = true
  let decreasing = true

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1])
      increasing = false
    if (nums[i] < nums[i + 1])
      decreasing = false
  }

  return increasing || decreasing
}


// #2
const isMonotonic = function(nums) {
  let isNeg = false
  let isPos = false

  for (let i = 1; i < nums.length; i++) {
    if (!isNeg && nums[i - 1] < nums[i]) isNeg = true
    if (!isPos && nums[i - 1] > nums[i]) isPos = true
    if (isNeg && isPos) return false
  }

  return true
}