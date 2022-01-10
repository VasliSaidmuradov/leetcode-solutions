// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow up: Could you solve the problem in linear time and in O(1) space?


/**
 * @param {number[]} nums
 * @return {number[]}
 */


// Solutions:

// #1
const majorityElement = function(nums) {
  const res = []
  const times = nums.length / 3
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }

  for (const prop in obj) {
    if (obj[prop] > times) {  
      res.push(+prop)
    }
  }

  return res
}

// #2
const majorityElement = function(nums) {
  return Object.entries(nums
      .reduce(function(acc, x) {
        acc[x] = (acc[x] || 0) + 1
        return acc
      }, new Object())
    )
    .filter(x => x[1] > Math.floor(nums.length/3))
    .map(x => +x[0])
}