// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solutions:

// #1
const isAnagram = function(s, t) {
  return [...s].sort().join('') === [...t].sort().join('')
}

// #2
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const objS = {}
  const objT = {}

  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = objS[s[i]] ? objS[s[i]] + 1 : 1
  }

  for (let i = 0; i < t.length; i++) {
    objT[t[i]] = objT[t[i]] ? objT[t[i]] + 1 : 1
  }

  for (let prop in objS) {
    if (objS[prop] !== objT[prop]) return false 
  }

  return true
}

// #3
const isAnagram = function(s, t) {
  if (s.length != t.length) return false

  const arr = new Array(256).fill(0)

  let i = 0
  let m = 0

  while (i < s.length) {
    arr[s.charCodeAt(i) - 97]++
    arr[t.charCodeAt(i) - 97]--
    i++
  }

  while (m < arr.length) {
    if (arr[m] != 0)  return false    
    m++
  }

  return true
}
