// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


// Solutions:

// #1
const isIsomorphic = function(s, t) {
  return s.split('').filter((c, i) => t.indexOf(t[i]) != s.indexOf(c)).length === 0
}

// #2
const isIsomorphic = function(s, t) {
  const obj1 = {}
  const obj2 = {}

  for (let i = 0; i < s.length; i++) {
    if (!obj1[s[i]]) {
      obj1[s[i]] = t[i]

      if(obj2[t[i]]) return false
      obj2[t[i]] = true
    } else if (obj1[s[i]] !== t[i]) {
      return false
    }
  }

  return true
}

// #3
const isIsomorphic = function(s, t) {
  let charMap = new Map()

  for (let i = 0; i < s.length; i += 1) {
    if (!charMap.get(s[i])) {
    charMap.set(s[i], t[i])
    } else {
    if (charMap.get(s[i]) != t[i]) return false
    }
  }

  return new Set([...charMap.values()]).size == charMap.size
}
