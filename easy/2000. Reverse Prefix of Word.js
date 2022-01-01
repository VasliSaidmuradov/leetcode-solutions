// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".
 

// Constraints:

// 1 <= word.length <= 250
// word consists of lowercase English letters.
// ch is a lowercase English letter.



/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

// Solutions: 

// #1
const reversePrefix = function(word, ch) {
  const idx = word.indexOf(ch)

  if (idx !== -1) {
    let temp = [...word.slice(0, idx + 1)]
    
    for (let i = 0, j = idx; i < j; i++, j--) {
      [temp[i], temp[j]] = [temp[j], temp[i]]
    }

    return temp.join('') + word.slice(idx + 1)
  }

  return word
}

// #2
const reversePrefix = function(word, ch) {
  const idx = word.indexOf(ch)

  if (idx !== -1) {
    return [...word].splice(0, idx + 1).reverse().join('') + word.slice(idx + 1)
  }

  return word
}

// #3
const reversePrefix = function(word, ch) {
  const idx = word.indexOf(ch)
  if (idx == -1) return word

  let str = word.slice(idx + 1)

  if (idx !== -1) {
    for (let i = 0; i <= idx; i++) {
      str = word[i] + str
    }

    return str
  }
}

// #4
const reversePrefix = function(word, ch) {
  const idx = word.indexOf(ch)
  let str = word.slice(idx + 1)

  if (idx !== -1) {
    for (let i = 0; i <= idx; i++) {
      str = word[i] + str
    }

    return str
  }

  return word
}