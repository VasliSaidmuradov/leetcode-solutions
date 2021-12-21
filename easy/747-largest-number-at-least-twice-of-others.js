// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.


// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.
// Example 3:

// Input: nums = [1]
// Output: 0
// Explanation: 1 is trivially at least twice the value as any other number because there are no other numbers.
 

// Constraints:

// 1 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.


/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions:

// #1
const dominantIndex = function(nums) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? { ...obj[nums[i]], count: obj[nums[i]].count + 1 } : { idx: i, count: 1 }
  }

  nums.sort((a, b) => b -a)

  let maxNum = -Infinity

  for (let num of nums) {
    if (obj[num].count === 1) {
      maxNum = num
      break
    }
  }

  for (let i of nums) {
    if (i !== maxNum && maxNum < (i * 2)) {
      return -1
    }
  }

  return obj[maxNum].idx
}

// #2
const dominantIndex = function(nums) {
  if (!nums.length) return -1

  let maxNum = Number.MIN_SAFE_INTEGER
  let idx = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      maxNum = nums[i]
      idx = i
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (maxNum !== nums[j] && maxNum < nums[j] * 2) {
      return -1
    }
  }

  return idx
}

// #3
const dominantIndex = function(nums) {
  let maxNum = Math.max(...nums)
  let idx = -1

  for (let i = 0; i < nums.length; i++) {
    if (maxNum === nums[i]) {
      idx = i
      continue
    }

    if (maxNum < nums[i] * 2) {
      return -1
    }
  }

  return idx
}