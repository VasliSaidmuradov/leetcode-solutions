// 453. Minimum Moves to Equal Array Elements

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment n - 1 elements of the array by 1.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 3
// Explanation: Only three moves are needed (remember each move increments two elements):
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// Example 2:

// Input: nums = [1,1,1]
// Output: 0
 

// Constraints:

// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// The answer is guaranteed to fit in a 32-bit integer.


// #1
const minMoves = function(nums) {
  let sum = nums[0]
  let min = sum

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i]
    min = Math.min(min, nums[i])
  }

  return sum - nums.length * min
};

// #2
const minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  let count = 0

  for (let i = 0; i < nums.length - 1; i++) {
    let temp = Math.abs(nums[0] - nums[i + 1])
    count += temp
  }

  return  count
};

// #3
const minMoves3 = function(nums) {
  return sum(nums) - len(nums) * min(nums)
};


const min = arr => Math.min(...arr)
const len = arr => arr.length
const sum = arr => arr.reduce((acc, el) => acc + el)