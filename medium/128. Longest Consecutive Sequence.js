// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


/**
 * @param {number[]} nums
 * @return {number}
 */

// #1
const longestConsecutive = function(nums) {
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let count = 1
  let max = 0
  for (let i = 1; i < nums.length; i++) {
    let n = Math.abs(nums[i - 1] - nums[i])
    if (n === 0) {
      continue
    } else if (n === 1) {
      count += 1
    } else {
      max = Math.max(count, max)
      count = 1
    }
  }
  return Math.max(max, count)
};

// #2
const longestConsecutive2 = function(nums) {
  let set = new Set(nums)
  let max = 0
  
  for ( let n of set) {
    if (!set.has(n - 1)) {
      let count = 0

      while (set.has(n)) {
        count++
        n++
      }
      
      max = Math.max(count, max)  
    }
  }

  return max
};