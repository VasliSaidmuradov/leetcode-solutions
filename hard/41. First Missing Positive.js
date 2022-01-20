// 41. First Missing Positive

// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1


/**
 * @param {number[]} nums
 * @return {number}
 */

// #1
const firstMissingPositive = function(nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) obj[nums[i]] = 1
  }

  let i = 0

  do {
    i++
  } while (obj[i])

  return i
}

// #2
const firstMissingPositive = function(nums) {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) set.add(nums[i])
  }

  let i = 1

  while (true) {
    if (!set.has(i)) return i

    i++
  }
}

// #3
const firstMissingPositive = function(nums) {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) set.add(nums[i])
  }

  let i = 0

  do {
    i++
  } while (set.has(i))

  return i
}