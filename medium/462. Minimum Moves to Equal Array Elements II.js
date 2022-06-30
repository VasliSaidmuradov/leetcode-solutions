// 462. Minimum Moves to Equal Array Elements II

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
// Example 2:

// Input: nums = [1,10,2,9]
// Output: 16
 

// Constraints:

// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// #1
const minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  
  const median = Math.floor(nums.length / 2)
  let count = 0
  
  for (let num of nums) {
    count += Math.abs(nums[median] - num)
  }
  
  return count
};

// #2
const minMoves22 = function(nums) {
  nums.sort((a,b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  let moves = 0;

  while (start <= end) {
    moves += nums[end] - nums[start];
    start++;
    end--;
  }

  return moves;
};