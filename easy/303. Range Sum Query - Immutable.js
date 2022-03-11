// 303. Range Sum Query - Immutable

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
// 0 <= left <= right < nums.length
// At most 104 calls will be made to sumRange.

// #1
const NumArray = function(nums) {
  this.arr = nums.slice(0)
}

NumArray.prototype.sumRange = function(left, right) {
  let sum = 0
  let i = 0
  while (i <= right - left) {
    sum += this.arr[left + i]
    i++
  }
  return sum
}

// #2
const NumArray2 = function(nums) {
  this.nums = [...nums]
  for (let i = 1; i < nums.length; i++) {
    this.nums[i]  = this.nums[i] + this.nums[i-1]
  }
}

NumArray2.prototype.sumRange = function(left, right) {
  if (!left) {
    return this.nums[right]
  }

  return this.nums[right] - this.nums[left - 1]
}