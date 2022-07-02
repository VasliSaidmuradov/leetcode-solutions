// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// #1
const runningSum = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      nums[i] += nums[i - 1]
  }
  
  return nums
};

// #2
const runningSum2 = function(nums) {
  let sum = 0;
  return nums.map(el => sum += el);
};

// #3
const runningSum3 = function(nums) {
  return nums.reduce((acc, el, idx) => {
    acc.push(!idx ? el : el + acc[idx - 1])
    return acc
  }, [])
};

// #4
const runningSum4 = function(nums) {
  return nums.reduce((acc, el, idx) => !idx ? [...acc, el] : [...acc, el + acc[idx - 1]], [])
};
