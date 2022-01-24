// 520. Detect Capital

// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

 

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false
 

// Constraints:

// 1 <= word.length <= 100
// word consists of lowercase and uppercase English letters.


/**
 * @param {string} word
 * @return {boolean}
 */

// #1
const detectCapitalUse = function(word) {
  if (word === word.toUpperCase()) return true

  for (let i = 1; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false
    }
  }

  return true
}

// #2
const detectCapitalUse = function(word) {
  return word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase()
}

// #3
const detectCapitalUse = function(word) {
  let condition = false
  
  if (word.charCodeAt(0) < 97) {
    condition = true
  }

  if (condition === false && word.charCodeAt(1) < 97) {
    return false
  }

  if (word.charCodeAt(1) >= 97) {
    condition = false
  }

  for (let i = 1; i < word.length; i++) {
    if ((word.charCodeAt(i) < 97) !== condition) {
      return false
    }
  }

  return true
}