// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

 

// Constraints:

//     1 <= nums.length <= 104
//     -104 <= nums[i] <= 104
//     nums is sorted in non-decreasing order.

 
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


// #1
const sortedSquares = function(nums) {
  let i = 0
  let j = nums.length - 1

  const res = []

  while (i <= j) {
    if (i === j) {
      res.push(nums[i] ** 2)
    } else {
      res.push(nums[i] ** 2)
      res.push(nums[j] ** 2)
    }

    i++
    j--
  }

  return res.sort((a, b) => a - b)
}

// #2
const sortedSquares = function(nums) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    if (i !== j) {
      nums[j] = nums[j] ** 2
    }

    nums[i] = nums[i] ** 2

    i++
    j--
  }

  return nums.sort((a, b) => a - b)
}

// #3
const sortedSquares = function(nums) {
  const result = new Array(nums.length).fill(0)

  let left = 0
  let right = nums.length - 1
  let i = right

  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      result[i--] = nums[left++] ** 2
    } else {
      result[i--] = nums[right--] ** 2
    }
  }

  return result
}

// #4
const sortedSquares = function(nums) {
  const result = new Array(nums.length).fill(0)

  let start = 0
  let end = nums.length - 1
  let idx = end

  while (start <= end) {
    if (nums[start] ** 2 > nums[end] ** 2) {
      result[idx] = nums[start] ** 2
      start++
    } else {
      result[idx] = nums[end] ** 2
      end--
    }

    idx--
  }

  return result
}