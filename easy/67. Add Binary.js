// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Solutions:

// #1
const addBinary = function (a, b) {
  let res = ""

  let i = a.length - 1
  let j = b.length - 1
  let carry = 0

  while (i >= 0 || j >= 0) {
    let sum = carry

    if (i >= 0) {
      sum += a[i--] - '0'
    }

    if (j >= 0) {
      sum += b[j--] - '0'
    }

    res = sum % 2 + res
    carry = parseInt(sum / 2)
  }

  if (carry > 0) {
    res = 1 + res
  }

  return res
}

// #2
const addBinary = function(a, b) {
  let carry = 0
  let maxLength = Math.max(a.length, b.length)
  let res = Array(maxLength).fill(0)

  let i = 0

  while (i < maxLength) {
    const digitA = (a.length - 1 - i < 0 ? 0 : a[a.length - 1 - i] * 1)
    const digitB = (b.length - 1 - i < 0 ? 0 : b[b.length - 1 - i] * 1)

    const sum = digitA + digitB + carry

    res[maxLength - 1 - i] = sum % 2
    carry = Math.floor(sum / 2)

    i++
  }

  if (carry > 0) {
    res.unshift(1)
  }

  return res.join('')
}

// #3
const addBinary = function(a, b) {
  const digitA = BigInt("0b" + a)
  const digitB = BigInt("0b" + b)

  return  (digitA + digitB).toString(2)
}