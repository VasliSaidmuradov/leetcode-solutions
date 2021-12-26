// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// Solutions: 

// #1
const gcdOfStrings = function(str1, str2) {
  let str = str2

  for (let i = str.length; i > 0; i--) {
    const cur = str.slice(0, i)
    const re = new RegExp(cur, 'g')

    if (!str1.replace(re, '') && !str2.replace(re, '')) {
      return cur
    }		
  }

  return ''
}

// #2
const gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''

  const gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }

  return str1.slice(0, gcd(str1.length, str2.length))
}