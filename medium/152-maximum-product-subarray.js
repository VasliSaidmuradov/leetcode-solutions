// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions:

// #1
const maxProduct = function(nums) {
  if (nums.length <= 1) return nums[0]

  let total = -Infinity
  let temp = 1

  let i = 0

  while (i < nums.length) {
    for (let j = i; j < nums.length; j++) {
      temp *= nums[j]

      if (temp > total) {
        total = temp
      }
    }

    temp = 1
    i++
  }

  return total ? total : 0
}

// #2
const maxProduct = function(nums) {
  let maxProduct = nums[0]
  let currentMinimum = 1
  let currentMaximum = 1

  for (const number of nums) {        
    const temp = currentMaximum * number
    currentMaximum = Math.max(number * currentMaximum, number * currentMinimum, number)
    currentMinimum = Math.min(temp, number * currentMinimum, number)
    maxProduct = Math.max(maxProduct, currentMaximum)
  }

  return maxProduct
}
