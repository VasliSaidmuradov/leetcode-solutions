// Given a string s. You should re-order the string using the following algorithm:

// Pick the smallest character from s and append it to the result.
// Pick the smallest character from s which is greater than the last appended character to the result and append it.
// Repeat step 2 until you cannot pick more characters.
// Pick the largest character from s and append it to the result.
// Pick the largest character from s which is smaller than the last appended character to the result and append it.
// Repeat step 5 until you cannot pick more characters.
// Repeat the steps from 1 to 6 until you pick all characters from s.
// In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

// Return the result string after sorting s with this algorithm.


// Example 1:

// Input: s = "aaaabbbbcccc"
// Output: "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
// Example 2:

// Input: s = "rat"
// Output: "art"
// Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
// Example 3:

// Input: s = "leetcode"
// Output: "cdelotee"
// Example 4:

// Input: s = "ggggggg"
// Output: "ggggggg"
// Example 5:

// Input: s = "spo"
// Output: "ops"
 

// Constraints:

// 1 <= s.length <= 500
// s contains only lower-case English letters.

/**
 * @param {string} s
 * @return {string}
 */

// Solutions:

// #1
const sortString = function(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  const obj = {}
  let newStr = ''

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1
  }

  while (newStr.length < s.length) {
    for (let j = 0; j < alphabet.length; j++) {
      const cur = alphabet[j]

      if (obj[cur]) {
        newStr += cur
        obj[cur] -= 1	
      }
    }

    for (let k = alphabet.length - 1; k >= 0; k--) {
      const cur = alphabet[k]

      if (obj[cur]) {
        newStr += cur
        obj[cur] -= 1
      }
    }
  }

  return newStr
}
