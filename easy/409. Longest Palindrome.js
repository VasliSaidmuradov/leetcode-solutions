// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Example 3:

// Input: s = "bb"
// Output: 2
 

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

/**
 * @param {string} s
 * @return {number}
 */

// #1
const longestPalindrome = function(s) {
  let length = 0
  const hash = {}

  for (let i of s) {
    hash[i] = (hash[i] || 0) + 1

    if (hash[i] === 2) {
      delete hash[i]
      length += 2
    }
  }

  return Object.keys(hash).length ? length + 1 : length
}

// #2
const longestPalindrome = function(s) {
  const letterMap = {}
  let size = 0

  s.split('').forEach(char => {
    if (letterMap[char]) {
      size += 2
      delete letterMap[char]
    } else {
      letterMap[char] = true
    }
  })

  if (Object.keys(letterMap)[0]) {
    return size + 1
  }

  return size
}