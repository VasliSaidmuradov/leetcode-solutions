// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// #1
const searchRange = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  let mid
  let found = false

  while (start <= end) {
    mid = end - Math.floor((end - start) / 2)

    if (nums[mid] === target) {
      found = true
      break
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }


  if (!found) return [-1, -1]

  let i = mid - 1
  let j = mid + 1

  while (i >= 0 || j <= nums.length - 1) {
    if (nums[i] !== target && nums[j] !== target) break

    if (nums[i] === target) i--
    if (nums[j] === target) j++
  }

  return [i + 1, j - 1]
}

// #2
const searchRange = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  let mid
  let found = false

  while (start <= end) {
    mid = end - Math.floor((end - start) / 2)

    if (nums[mid] === target) {
      found = true
      break
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  if (!found) return [-1, -1]

  let i = mid
  let j = mid

  while (nums[i - 1] === target) {
    i--
  }

  while (nums[j + 1] === target) {
    j++
  }

  return [i, j]
}

// #3
const searchRange = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = end - Math.floor((end - start) / 2)

    if (nums[mid] === target) {
      let i = mid
      let j = mid

      while (nums[i - 1] === target) {
        i--
      }

      while (nums[j + 1] === target) {
        j++
      } 

      return [i, j]
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return [-1, -1]
}


// #4
const searchRange = function(nums, target) {
  function findLeftNotRight(boolean) {
    let left = 0
    let right = nums.length // not nums.length-1 like we usually do. this is to fix the right edge bug. //template #2 actually requires using nums.length rather than nums.length-1;
    
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2)
      
      if (nums[mid] > target || (boolean == true && nums[mid] === target)) { //learn how to use the flag!!!
        right = mid
      } else {
        left = mid + 1
      }
    }
    
    return left 
  }

  let start = findLeftNotRight(true)
  let end = findLeftNotRight(false) - 1

  if (nums[start] != target) {
    return [-1, -1];
  } else {
    return [start, end]
  }
}