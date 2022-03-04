// 415. Add Strings

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
 

// Constraints:

// 1 <= num1.length, num2.length <= 104
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// #1
const addStrings = function(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  const res = new Array(i > j ? i : j).fill(0)
  let k = res.length

  while (i >= 0 || j >= 0) {
    let x = i >= 0 ? num1[i] : 0
    let y = j >= 0 ? num2[j] : 0
    const sum = +x + +y + carry
    carry = Math.floor(sum / 10)
    res[k] = sum % 10
    i--
    j--
    k--
  }

  if (carry) res.unshift(carry)

  return res.join('')
}

// #2
const addStrings = function(num1, num2) {
  let a = BigInt(num1) + BigInt(num2)
  return(a.toString())
}
