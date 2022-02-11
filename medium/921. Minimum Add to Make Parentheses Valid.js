// 921. Minimum Add to Make Parentheses Valid

// A parentheses string is valid if and only if:

// It is the empty string,
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

// For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
// Return the minimum number of moves required to make s valid.

 

// Example 1:

// Input: s = "())"
// Output: 1
// Example 2:

// Input: s = "((("
// Output: 3
 

// Constraints:

// 1 <= s.length <= 1000
// s[i] is either '(' or ')'.


/**
 * @param {string} s
 * @return {number}
 */

// #1
const minAddToMakeValid = function(s) {
  const stack = []

  for (let ch of s) {
    const lastItem = stack[stack.length - 1]
    if (stack.length && lastItem === '(' && lastItem !== ch) {
      stack.pop()
    } else {
      stack.push(ch)
    }
  }

  return stack.length
}

// #2
const minAddToMakeValid = function(s) {
  let openingCount = 0
  let movesNeeded = 0
  let i = 0

  while(i < s.length) {
    if(s[i] === '(') openingCount++
    else if(openingCount) openingCount--
    else movesNeeded++
  
    i++
  }

  return openingCount + movesNeeded
}
