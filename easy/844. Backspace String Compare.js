// 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
 

// Follow up: Can you solve it in O(n) time and O(1) space?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// #1
const backspaceCompare = function(s, t) {
  const stackS = []
  const stackT = []

  for (let ch of s) {
    if (ch === '#') {
      stackS.pop()
    } else {
      stackS.push(ch)
    }
  }

  for (let ch of t) {
    if (ch === '#') {
      stackT.pop()
    } else {
      stackT.push(ch)
    }
  }

  return stackS.join('') === stackT.join('')
}

// #2
const backspaceCompare = function(s, t) {
  let stackS = ''
  let stackT = ''

  for (let i = 0; i < s.length; i++) {
    s[i] === '#' ? stackS = stackS.slice(0, -1) : stackS += s[i]
  }

  for (let i = 0; i < t.length; i++) {
    t[i] === '#' ? stackT = stackT.slice(0, -1) : stackT += t[i]
  }

  return stackS === stackT
}
