// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
 

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?


// #1
const isSubsequence = function(s, t) {
  let idx = 0
  let i = 0

  while (i < t.length && idx < s.length) {
    if (s[idx] === t[i]) idx++
    i++
  }

  return idx === s.length
}

// 32
const isSubsequence = function(s, t) {
  let currentIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const found = t.indexOf(s[i], currentIndex);
      if (found < currentIndex) {
      return false;
    } else {
      currentIndex = found + 1;
    }
  }
  return true;
}

var isSubsequence = function(s, t) {
  let index = -1
  for (let ch of s) {
    index = t.indexOf(ch, index + 1)
    if (index < 0) return false
  }
  return true
}