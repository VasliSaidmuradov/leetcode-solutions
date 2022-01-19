// 260. Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
 

// Constraints:

// 2 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each integer in nums will appear twice, only two integers will appear once.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// #1
const singleNumber = function(nums) {
  const set = new Set()

  for (num of nums) {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  }

  return [...set]
}

// #2
const singleNumber = function(nums) {
  const obj = {}
  const res = []

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }

  for (const prop in obj) {
    if (obj[prop] === 1) res.push(prop)
  }

  return res
}

// #3
const singleNumber = function (nums) {
  let xor = (a, b) => a ^ b
  let aXORb = nums.reduce(xor)
  let rightMostOne = aXORb & -aXORb
  let aOrb = nums.filter(ele => (ele & rightMostOne) === 0).reduce(xor)
  
  return [aOrb, aXORb ^ aOrb]
}