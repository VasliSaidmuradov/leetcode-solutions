// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false
 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// Solutions:

// #1
const wordPattern = function(pattern, s) {
  const words = s.split(' ')

  if (words.length !== pattern.length) return false

  let dict = new Map()
  let set = new Set()

  for (let i = 0; i < words.length; i++) {
    let char = pattern[i]

    if (!dict.has(char)) {
      if (set.has(words[i])) {
        return false
      } else {
        set.add(words[i])
      }

      dict.set(char, words[i])
    } else {
      if (dict.get(char) !== words[i]) {
        return false
      }
    }
  }

  return true
}

// #2
const wordPattern = function(pattern, s) {
  const arr = s.split(' ')

  if (pattern.length !== arr.length) return false

  const obj = {}
  const check = {}

  for (let i = 0; i < pattern.length; i++) {
    if (!obj[pattern[i]]) {
      obj[pattern[i]] = arr[i]

      if (check[arr[i]]) return false
      check[arr[i]] = true
    } else if (obj[pattern[i]] !== arr[i]) {
      return false
    }
  }

  return true
}
