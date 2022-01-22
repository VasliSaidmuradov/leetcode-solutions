// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
 

// Constraints:

// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
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

  if (leftRes !== -1) return leftRes
  else if (rightRes !== -1) return idx + rightRes

  return -1
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
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) return mid

    if (nums[left] <= nums[mid]) {

    if (nums[left] <= target && target < nums[mid]) 
      right = mid - 1
    else 
      left = mid + 1


    } else {
      if (nums[mid] < target && target <= nums[right]) 
        left = mid + 1
      else 
        right = mid - 1
    }
  }

  return -1
}