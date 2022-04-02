// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.


/**
 * @param {string} s
 * @return {boolean}
 */


// #1
const validPalindrome = function(s) {
  let start = 0
  let end = s.length - 1

  while (start < end) {
    if (s[start] !== s[end]) {
      return isPalindrom(s, start, end - 1) || isPalindrom(s, start + 1 , end)
    }
    start++
    end--
  }

  return true
}

const isPalindrom = (s, start, end) => {
  while (start < end) {
    if (s[start] !== s[end]) return false
    start++
    end--
  }

  return true
}