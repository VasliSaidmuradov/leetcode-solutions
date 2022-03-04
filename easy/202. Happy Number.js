// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1


/**
 * @param {number} n
 * @return {boolean}
 */

// #1
const isHappy = function(n) {    
  const store = new Set()
  store.add(n)

  while (n !== 1) {
    let str = n.toString()
    let next = 0
    for (let num of str) {
      next += num ** 2
    }
    n = next
    if (store.has(n)) return false
    store.add(n)
  }

  return true
}

// #2
const isHappy = function(n) {
  if (n === 1 || n ===7) return true
  if(n < 10) return false
  let res = n.toString()
  let nextNum = 0

  for (let i = 0; i < res.length; i++) {
    nextNum += res[i] ** 2
  }

  return isHappy(nextNum)
}
