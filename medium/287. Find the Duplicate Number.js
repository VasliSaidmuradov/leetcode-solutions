// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?


/**
 * @param {number[]} nums
 * @return {number}
 */

// #1
const findDuplicate = function(nums) {
  nums.sort()

  let i = 0
  let j = i + 1

  while (j < nums.length) {
    if (nums[i] === nums[j]) return nums[i]
    i++
    j++
  }
}


// #2
const findDuplicate = function(nums) {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return nums[i]
    }
  
    obj[nums[i]] = 1
  }
}

// #3
const findDuplicate = function(nums) {
  nums.sort()

  let i = 0
  let j = i + 1

  while (nums[i] !== nums[j]) {
    i++
    j++
  }

  return nums[i]
}


// #4
const findDuplicate = function(nums) {
  let n = nums.length
  let arr = []
  
  for(let i = 0; i < nums.length; i++) {
    arr.push(nums[i])
  }

  for(let i = 0; i < nums.length; i++) {
    arr[nums[i]] = arr[nums[i]] + n
  }

  for(let i = 0; i < nums.length; i++) {
    if(Math.floor(arr[i] / n) > 1) {
      return i
    }
  }
}


// #5
const findDuplicate = function(nums) {
  let slow = nums[0]
  let fast = nums[nums[0]]

  while (slow != fast) { // we are guaranteed to have a cycle
    slow = nums[slow]
    fast = nums[nums[fast]]
  }

  slow = 0

  while (slow != fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return slow
}


// #6
const findDuplicate = function(nums) {
  let slow=nums[0]
  let fast=nums[0]

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
  } while (slow !== fast)

  slow=nums[0]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return fast
}