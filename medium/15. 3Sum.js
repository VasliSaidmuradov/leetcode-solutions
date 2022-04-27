// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []
 

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105


/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// #1
const threeSum = function(nums) {
  const res = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue
    } 

    const num = nums[i]
    let l = i + 1
    let r = nums.length - 1

    while (l < r) {
      const sum = num + nums[l] + nums[r]

      if (sum > 0) {
        r--
      } else if (sum < 0) {
        l++
      } else {
        res.push([num, nums[l], nums[r]])
        l++
        while (nums[l] === nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  return res
}