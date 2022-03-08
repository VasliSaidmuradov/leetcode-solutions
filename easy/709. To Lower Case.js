// 709. To Lower Case

// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.


// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.

/**
 * @param {string} s
 * @return {string}
 */

// Solution:

// #1
const toLowerCase1 = function(s) {
  return s.toLowerCase()
}

// #2
const toLowerCase2 = function(s) {
  const CODE_A = 65
  const CODE_Z = 90
  const DIFF_BETWEEN_LOWER_AND_UPPER = 32
  let res = ''
  for (ch of s) {
    const code = ch.charCodeAt(0)
    if (code >= CODE_A && code <= CODE_Z) {
      res += String.fromCharCode(code + DIFF_BETWEEN_LOWER_AND_UPPER)
    } else {
      res += ch			
    }
  }
  return res
}