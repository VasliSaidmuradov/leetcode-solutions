// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */

 const isValid = function(s) {
  const brackets = {
  ')': '(',
  '}': '{',
  ']': '['
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets) {
      if (stack.length && stack[stack.length - 1] === brackets[s[i]]) {
        stack.pop()    
      } else {
        return false
      }
    } else {
      stack.push(s[i])
    }
  }

  return !stack.length
}

// #2
const isValid = function(s) {
  const brackets = {
  ')': '(',
  '}': '{',
  ']': '['
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === brackets[s[i]]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }

  return !stack.length
}