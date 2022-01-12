// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// Solutions:

// #1

const moveZeroes = function(nums) {
  let len = nums.length - 1
  let i = 0
  let countZeroes = 0

  for (let i = 0; i < len;) {
    if (nums[i] === 0) {
      countZeroes++
      nums.splice(i, 1)
    } else {
      i++
    }
  }

  for (let j = 0; j < countZeroes; j++) {
    nums.push(0)
  }
}


// #2
const moveZeroes = function(nums) {
  let len = nums.length - 1
  let i = 0

  while (i < len) {
    if (nums[i] === 0) {
      nums.push(...nums.splice(i, 1))
      len--
      continue
    }

    i++
  }
}

// #3
const moveZeroes = function(nums) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1))
      i = i
    } else {
      i++ 
    }
  }
}
