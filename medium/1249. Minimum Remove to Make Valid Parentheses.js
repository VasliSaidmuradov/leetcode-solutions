// 1249. Minimum Remove to Make Valid Parentheses

// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
 

// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:

// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:

// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is either'(' , ')', or lowercase English letter.


/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function(s) {
  let a = []
  let parts = s.split('')

  for (let i = 0; i < parts.length; i++) {
    const letter = parts[i]
    if (letter == '(') {
      a.push(i)
    } else if (letter == ')') {
      let x = a.pop()
      if (x == undefined) {
        parts[i] = '*'
      }
    }
  }

  let remaining = a.pop()
  while(remaining != undefined) {
    parts[remaining] = '*'
    remaining = a.pop()
  }

  return parts.join('').replace(/\*/g, '')
}

// #2
const minRemoveToMakeValid2 = function(s) {
  const stack = []
  let idx = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == ')') {
      if (s[i] === ')' && stack.length && stack[stack.length - 1] === '(') {
        stack.pop()
        idx.pop()
      } else {
        stack.push(s[i])
        idx.push(i)
      }
    }
  }

  for (let j = idx.length - 1; j >= 0; j--) {
    s = s.slice(0, idx[j]) + s.slice(idx[j] + 1)
  }

  return s
}