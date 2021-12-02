// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

 

// Example 1:

// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.
// Example 2:

// Input: nums = [2,3,1,2]
// Output: false
// Explanation:
// [3,1,2] is the result of removing the element at index 0.
// [2,1,2] is the result of removing the element at index 1.
// [2,3,2] is the result of removing the element at index 2.
// [2,3,1] is the result of removing the element at index 3.
// No resulting array is strictly increasing, so return false.
// Example 3:

// Input: nums = [1,1,1]
// Output: false
// Explanation: The result of removing any element is [1,1].
// [1,1] is not strictly increasing, so return false.
// Example 4:

// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is already strictly increasing, so return true.
 

// Constraints:

// 2 <= nums.length <= 1000
// 1 <= nums[i] <= 1000


/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solutions:

// #1
const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false
  }

  return true
}

const canBeIncreasing = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const temp = [...nums]
    temp.splice(i,1)

    if (isSorted(temp)) {
      return true
    }
  }

  return false
}
