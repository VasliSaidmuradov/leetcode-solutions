// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// #1
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = left + Math.floor((right - left) / 2)

    if (nums[middle] === target) {
      return middle
    }else if (nums[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1 
    }
  }

  return -1
};

// #2
const search2 = function (nums, target) {
  let [left, right] = [0, nums.length-1] 
  let mid
  
  while (left <= right) {
      mid = left + Math.floor((right-left)/2)
      nums[mid] <= target ? left = mid + 1: right = mid -1
  }
  return nums[right] == target ? right : -1
};



// PYTHON 3
// class Solution:
//     def search(self, nums: List[int], target: int) -> int:
//         l, r = 0, len(nums) - 1
//         while l <= r:
//             mid = l + (r - l) // 2
//             if nums[mid] == target:
//                 return mid
//             elif nums[mid] < target:
//                 l = mid + 1
//             else:
//                 r = mid - 1
//         return -1