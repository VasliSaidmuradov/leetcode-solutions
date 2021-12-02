// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

 

// Example 1:

// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.
// Example 2:

// Input: nums = [4,2,5,9,7,4,8]
// Output: 64
// Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
// The product difference is (9 * 8) - (2 * 4) = 64.
 

// Constraints:

// 4 <= nums.length <= 104
// 1 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions: 

// #1
const maxProductDifference = function(nums) {
  nums.sort((a, b) => a -b)
  return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]) 
}

// #2
const merge =(arr1, arr2) => {
  const res = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    res.push(arr2[j])
    j++
  }

  return res
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const l = mergeSort(arr.slice(0, mid))
  const r = mergeSort(arr.slice(mid))

  return merge(l, r)
}

const maxProductDifference = function(nums) {
  nums = mergeSort(nums)
  return (nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]) 
}
