// 32. Longest Valid Parentheses

// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.


/**
 * @param {string} s
 * @return {number}
 */

// #1
const longestValidParentheses = function(s) {
  const stack = [-1]
  let max = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (!stack.length) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }

  return max
};

// #2
const longestValidParentheses2 = function(s) {
  const stack = []
  let max = 0
  let left = -1

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      if (!stack.length) {
        left = i
      } else {
        stack.pop()
        if (!stack.length) {
          max = Math.max(max, i - left)
        } else {
          max = Math.max(max, i - stack[stack.length - 1])
        }
      }
    }
  }

  return max
};

// #3 Time O(n) Space O(1)
const longestValidParentheses3 = function(s) {
  let left = 0, right = 0, maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? left++ : right++;

    if (left == right) {
      maxLength = Math.max(maxLength, 2 * right);
    } else if (right >= left) {
      left = right = 0;
    }
  }
  
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    s[i] === '(' ? left++ : right++;

    if (left == right) {
      maxLength = Math.max(maxLength, 2 * left);
    } else if (left >= right) {
      left = right = 0;
    }
  }
  return maxLength;
};