// 509. Fibonacci Number

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

 

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 

// Constraints:

// 0 <= n <= 30

/**
 * @param {number} n
 * @return {number}
 */

// #1
const fib = function(n) {
  if (n === 1) return 1
  else if (n === 0) return 0
  else return fib(n-1) + fib(n-2)
}

// #2
const fib = function(n) {
  const last = [0, 1]
  let count = 2

  while (count <= n) {
    const temp = last[0] + last[1]
    last[0] = last[1]
    last[1] = temp
    count++
  }

  return n === 0 ? last[0] : last[1]
}

// #3
const fib = function(n) {
  let seq = [0,1]
  let i = 2

  while(i <= n) {
    seq.push(seq[seq.length-1] + seq[seq.length-2])
    i++
  }
  return seq[n]
}

// #4
const fib = function(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}