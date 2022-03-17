// 856. Score of Parentheses

// Given a balanced parentheses string s, return the score of the string.

// The score of a balanced parentheses string is based on the following rule:

// "()" has score 1.
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: s = "()"
// Output: 1
// Example 2:

// Input: s = "(())"
// Output: 2
// Example 3:

// Input: s = "()()"
// Output: 2
 

// Constraints:

// 2 <= s.length <= 50
// s consists of only '(' and ')'.
// s is a balanced parentheses string.

/**
 * @param {string} s
 * @return {number}
 */

// #1
const scoreOfParentheses = function(s) {
  const stack = []
  stack.push(0) // The score of the current frame

  for (let char of s) {
    if (char === '(')
      stack.push(0)
    else {
      let v = stack.pop()
      let w = stack.pop()
      stack.push(w + Math.max(2 * v, 1))
    }
  }

  return stack.pop()
}

// #2
const scoreOfParentheses2 = function(s) {
  let ans = 0
  let bal = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      bal.push(ans)
      ans = 0
    } else {      
      ans = bal.pop() + Math.max(ans * 2, 1)
    }
  }

  return ans
}