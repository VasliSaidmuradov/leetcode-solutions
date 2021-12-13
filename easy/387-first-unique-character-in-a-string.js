// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */

// Solutions: 

// #1
const firstUniqChar = function(s) {
  let arr = [...s]

  return arr.findIndex((el, idx) => arr.indexOf(el) === arr.lastIndexOf(el))
}

// #2
const firstUniqChar = function(s) {
  const obj = {}

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i
    } 
  }

  return -1
}

// #3
const firstUniqChar = function(s) {
  const charArr = new Array(26).fill(0)
  for(let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - 97
    charArr[index] ++
  }
  
  for(let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - 97
    if(charArr[index] === 1) return i
  }

  return -1
}