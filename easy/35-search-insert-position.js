// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104



// Solutions: 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// #1
const searchInsert = function(nums, target) {
  const len = nums.length
  if (target > nums[len - 1]) return len;
  if (target < nums[0]) return 0;

  for (let i = 0; i < len; i++) {
    if (target === nums[i] || target < nums[i]) return i;
  }
}

// #2
const searchInsert = function(nums, target) {
  const len = nums.length;
  let ans = 0;

  for ( let i = 0; i < len; i++ ) {
    if ( i === len - 1 && nums[i] !== target) ans = i +1
    if (nums[i] === target || nums[i] > target) {
      return ans = i
    }
  }

  return ans
}
