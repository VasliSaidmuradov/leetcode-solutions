// 1523. Count Odd Numbers in an Interval Range

// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 

// Constraints:

// 0 <= low <= high <= 10^9

// #1
const countOdds = function(low, high) {
  let res = 0
  let odd = low % 2 === 1 ? low : low + 1

  while (odd <= high) {
    res++
    odd += 2
  }

  return res
}

// #2
const countOdds = function(low, high) {
  let count = 0
  if((low % 2) && (high % 2))
    count++

  return Math.ceil((high - low) / 2) + count
}
