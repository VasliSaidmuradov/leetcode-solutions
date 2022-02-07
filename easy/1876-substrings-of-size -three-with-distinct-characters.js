// 1876. Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.

// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

// A substring is a contiguous sequence of characters in a string.

 

// Example 1:

// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:

// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
 

// Constraints:

// 1 <= s.length <= 100
// s​​​​​​ consists of lowercase English letters.



/**
 * @param {string} s
 * @return {number}
 */

// Solutions: 

// #1
const countGoodSubstrings = function(s) {
  let i = 0
  let j = i + 2
  let count = 0

  while (j < s.length) {
    const subStr = s.slice(i, j + 1)
    if (subStr[0] !== subStr[1] && subStr[1] !== subStr[2] && subStr[0] !== subStr[2]) {
      count++
    }

    i++
    j++
  }

  return count
}

// #2
const countGoodSubstrings = function(s) {
  let i = 0
  let count = 0

  while (i < s.length - 2) {
    if (s[i] !== s[i + 1] && s[i + 1] !== s[i + 2] && s[i] !== s[i + 2]) {
      count++
    }

    i++
  }

  return count
}

// #3
const countGoodSubstrings = function(s) {
  let count = 0
  let set = { size: 0 }

  for (let i = 0; i < 3; i++) {
    if (set[s[i]]) {
      set[s[i]] += 1
    } else {
      set[s[i]] = 1
      set.size++
    }
  }
  if (set.size === 3) count++
 
  for (let i = 3; i < s.length; i++) {
    let f = s[i-3]
    let l = s[i]

    set[f]--

    if (set[f] === 0) {
      delete set[f]
      set.size--
    }

    if (set[l]) {
      set[l]++
    } else {
      set[l] = 1
      set.size++
    }

    if (set.size === 3) count++
  }

  return count
}

// #4
const countGoodSubstrings = function(s) {
  let count = 0

  let i = 0
  let j = 2

  let set = new Set()

  for (let i = 0; i < s.length - 2; i++) {
    const subStr = s.slice(i, i+3)
    set.add(s[i])
    set.add(s[i+1])
    set.add(s[i+2])

    if (set.size === 3) count++

    set.delete(s[i])
  }

  return count
}
