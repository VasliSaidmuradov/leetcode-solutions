// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)



/**
 * @param {number[]} nums
 * @return {number[]}
 */

// #1
const productExceptSelf = function(nums) {
  const ans = []
  const productOfAll = nums.reduce((acc, num) => acc * num)

  for (let i = 0; i < nums.length; i++) {
    let product
    if (nums[i] !== 0) {
      product = productOfAll / nums[i]
    } else {
      let temp = 1

      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          temp *= nums[j]
        }
      }
      product = temp
    }

    ans[i] = product
  }

  return ans
}

// #2
const productExceptSelf2 = function(nums) {
  const ans = []
  const prefix = []
  const postfix = []
  let product = 1
  for (let i = 0; i < nums.length; i++) {
    product *= nums[i]
    prefix[i] = product
  }

  product = 1
  for (let j = nums.length - 1; j >=0; j--) {
    product *= nums[j]
    postfix[j] = product
  }

  for (let i = 0; i < nums.length; i++) {
    const pre = prefix[i - 1] === undefined ? 1 : prefix[i - 1]
    const post = postfix[i + 1] === undefined ? 1 :postfix[i + 1]
    ans[i] = pre * post
  }

  return ans
}

// #3
const productExceptSelf3 = function(nums) {
  const ans = new Array(nums.lenght).fill(1)

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix
    prefix *= nums[i]      
  }

  let postfix = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    ans[j] *= postfix
    postfix *= nums[j]
  }

  return ans
}

// #4
const productExceptSelf4 = function(nums) {
  const ans = new Array(nums.lenght).fill(1)

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    prefix *= nums[i]
    ans[i] = prefix
  }

  let postfix = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    ans[j] = (ans[j - 1] === undefined ? 1 : ans[j - 1]) * postfix
    postfix *= nums[j]
  }

  return ans
}