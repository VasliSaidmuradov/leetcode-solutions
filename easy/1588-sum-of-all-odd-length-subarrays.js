// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

// A subarray is a contiguous subsequence of the array.

// Return the sum of all odd-length subarrays of arr.

 

// Example 1:

// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// Example 2:

// Input: arr = [1,2]
// Output: 3
// Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
// Example 3:

// Input: arr = [10,11,12]
// Output: 66
 

// Constraints:

// 1 <= arr.length <= 100
// 1 <= arr[i] <= 1000


/**
 * @param {number[]} arr
 * @return {number}
 */

// Solutions

// #1
const sumOddLengthSubarrays = function(arr) {
  let sum = arr.reduce((acc, el) => acc + el, 0)
  const ans = []

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 2; j < arr.length; j += 2) {
      ans.push(...arr.slice(i, j + 1))
    }
  }

  sum += ans.reduce((acc, el) => acc + el, 0)

  return sum
}

// #2
const sumOddLengthSubarrays = function(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    let tempSum = arr[i]
    sum += tempSum
    for (let j = i + 2; j < arr.length; j += 2) {
      tempSum += arr[j - 1] + arr[j]
      sum += tempSum
    }
  }

  return sum
}