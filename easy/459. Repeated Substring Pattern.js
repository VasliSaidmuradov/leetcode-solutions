// 459. Repeated Substring Pattern

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.


/**
 * @param {string} s
 * @return {boolean}
 */

// #1
const repeatedSubstringPattern1 = function (s) {
  return s.repeat(2).slice(1, -1).includes(s)
}

// #2
const repeatedSubstringPattern2 = function(s) {
  let len = s.length
  const res = []

  for (let i = 0; i < s.length; i++) {
    if (len % i === 0) res.push(i)
  }

  for (let num of res) {
    let subStr = s.slice(0, num)
    let times  = len / num
    if (subStr.repeat(times) === s) return true
  }

  return false
}