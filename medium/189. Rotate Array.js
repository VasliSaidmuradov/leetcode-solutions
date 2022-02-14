// 189. Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// #1
const rotate = function(nums, k) {
  let res = [...nums]
  k = k % nums.length

  let r = res.length - k
  let i = 0

  while (i < k) {
    nums[i] = res[r]
    i++
    r++
  }

  i = 0

  while (k < res.length) {
    nums[k] = res[i]
    k++
    i++
  }

  return nums
}

// #2
const rotate = function(nums, k) {
  const N = nums.length
  k = k % N

  reverse(nums, 0, N - k - 1) // [4,3,2,1,7,6,5]
  reverse(nums, N - k, N - 1) // [4,3,2,1,7,6,5]
  reverse(nums, 0, N - 1) // [5,6,7,1,2,3,4]
}

const reverse = (arr, start, end) => {
  let i = start
  let j = end

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
}

// #3
const rotate = function(nums, k) {
  if (!nums || nums.length < 2) {
    return
  }

  k = k % nums.length

  const shiftCount = nums.length - k

  for (let i = 0; i < shiftCount; i++) {
    nums.push(nums[i])
  }

  nums.splice(0, shiftCount)
}

// #4
const rotate = function(nums, k) {
  k = k % nums.length

  nums.unshift(...nums.splice(-k))
}