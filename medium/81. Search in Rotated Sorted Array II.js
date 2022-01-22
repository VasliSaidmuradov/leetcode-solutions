// 81. Search in Rotated Sorted Array II

// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).

// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].

// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

// You must decrease the overall operation steps as much as possible.

 

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// nums is guaranteed to be rotated at some pivot.
// -104 <= target <= 104
 

// Follow up: This problem is similar to Search in Rotated Sorted Array, but nums may contain duplicates. Would this affect the runtime complexity? How and why?


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// #1
const search = function(nums, target) {
  let idx = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      idx = i + 1
    }
  }

  const leftArr = nums.slice(0, idx)
  const rightArr = nums.slice(idx)

  const leftRes = binarySearch(leftArr, target)
  const rightRes = binarySearch(rightArr, target)

  if (leftRes !== -1 || rightRes !== -1) return true

  return false
}

const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}


// #2

const search = function(nums, target) {
  return binarySearch(nums, target)
}

const binarySearch = (nums, target) => {
  let left = 0,
  right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) return true

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && target < nums[mid])
        right = mid - 1
      else
        left = mid + 1
    } else if (nums[left] === nums[mid]) {
      left++
    } else {
      if (nums[mid] < target && target <= nums[right])
        left = mid + 1
      else
        right = mid - 1
    }
  }

  return false
}