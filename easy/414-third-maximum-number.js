// 414-third-maximum-number

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Solutions:

// #1
const thirdMax = function(nums) {
  let unique = [...new Set(nums)]

  if (unique.length < 3) {
    return Math.max(...unique)
  }

  let i = 0
  let max = -Infinity

  while(i < 3) {
    max = Math.max(...unique)
    unique = unique.filter(el => el !== max)
    i++
  }

  return max
}


// #2
const thirdMax = function(nums) {
  let unique = [...new Set(nums)]

  if (unique.length < 3) {
    return Math.max(...unique)
  }

  console.log()
  return unique.sort((a, b) => b - a)[2]
}

// #3
const thirdMax = function(nums) {
  const set = new Set(nums)

  let max = null
  let second = null
  let third = null

  for (let value of set) {
    if (max === null || value > max) {
      third = second
      second = max
      max = value
    } else if (second === null || value > second) {
      third = second
      second = value
    } else if (third === null || value > third) {
      third = value
    }
  }

  if (third === null) return max

  return third
}