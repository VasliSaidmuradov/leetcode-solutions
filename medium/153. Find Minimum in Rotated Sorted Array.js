// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

// Constraints:

// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.


/**
 * @param {number[]} nums
 * @return {number}
 */

// #1 - O(n) time | O(1) space
const findMin = function(nums) {
  return Math.min(...nums)
}

// #2 - O(logN) time | O(1) space
const findMin2 = function(nums) {
  let left = 0
  let right = nums.length - 1
  let mid

  while (left <= right) {
    mid = left + Math.ceil((right - left) / 2)

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1]
    } else if ((nums[mid] < nums[mid - 1])) {
      return nums[mid]
    } else if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return nums[0]
}

// #3 - O(logN) time | O(1) space
const findMin3 = function(nums) {
  let result = nums[0]
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor(left + right)

    result = Math.min(result, nums[mid])

    if (nums[mid] >= nums[left]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}

// #4
const findMin4 = function(nums) {
  let start = 0
  let end = nums.length - 1
  let mid = Math.floor((start + end) / 2)

  if (nums[0] < nums[end]){
    return nums[0]
  }

  while (start < end) {
    if (nums[mid] >= nums[0]) {
      start = mid + 1
    } else {
      end = mid
    }

    mid = Math.floor((start + end) / 2)
  }
  
  return nums[s] 
}