// 28. Implement strStr()


// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0
 

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// #1
const strStr1 = function(haystack, needle) {
  if (!needle) return 0

  const len = needle.length

  for (let i = 0; i <= haystack.length - len; i++) {
    const subStr = haystack.slice(i, i + len)
    if(subStr === needle) return i
  }

  return -1
}

// #2
const strStr2 = function(haystack, needle) {
  if (needle === '') return 0
  return haystack.indexOf(needle)
}

// #3
const strStr = function(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.substr(i, needle.length) === needle) return i
  }

  return -1
}