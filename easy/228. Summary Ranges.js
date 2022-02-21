// 228. Summary Ranges

// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.


/**
 * @param {number[]} nums
 * @return {string[]}
 */


// #1
const summaryRanges = function(nums) {
  let res = []
  let i = 0
  let j = 1
  
  while(j < nums.length || i < nums.length) {
    if(nums[j] - nums[i] !== j - i) {
      if(nums[j-1] !== nums[i]) {
        res.push(nums[i] + '->' + nums[j-1]) 
      } else {
        res.push(nums[j-1] + '') 
      }
      i = j
    }
    j++
  }

  return res
}

// #2
const summaryRanges = function(nums) {
  if (!nums.length) return nums    
  if (nums.length < 2) return [`${nums[0]}`]


  let start = 0
  let end = 0
  const res = []

  while (end < nums.length) {
    if (nums[end+1] - nums[end] > 1) {
      res.push(start !== end ? `${nums[start]}->${nums[end]}` : `${nums[start]}`)
      start = end+1
    }
    end++
  }
  res.push(start !== (end-1) ? `${nums[start]}->${nums[end-1]}` : `${nums[start]}`)

  return res
}