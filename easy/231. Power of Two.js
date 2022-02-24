// 231. Power of Two

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?


/**
 * @param {number} n
 * @return {boolean}
 */

// Solutions: 

// #1
const isPowerOfTwo = (num) => {
  if (num > 0 && (num & (num - 1)) === 0) {
    return true
  }

  return false
}

// #2
const isPowerOfTwo = (num) => {
  return Math.log10(num) / Math.log10(2) % 1 === 0
}

// #3
const isPowerOfTwo = (num) => {
  if (num < 1) return false

  while (num % 2 === 0) {
    num = num / 2
  }

  return num === 1
}

// #4
const isPowerOfTwo = function(n) {
  if (n === 0) return false

  let res = Math.log2(n)

  return Math.floor(res) === res ? true : false
}