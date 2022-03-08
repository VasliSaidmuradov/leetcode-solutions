// 1768. Merge Strings Alternately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// Solutions:

// #1
const mergeAlternately1 = function(word1, word2) {
  let res = ''
  const maxLen = Math.max(word1.length, word2.length)


  for (let i = 0; i < maxLen; i++) {
    res += word1[i] || ''
    res += word2[i] || ''
  }

  return res
}

// #2
const mergeAlternately2 = function(word1, word2) {
  let res = ''
  let i = 0

  while (i < word1.length && i < word2.length) {
    res += word1[i]
    res += word2[i]
    i++
  }

  while (i < word1.length) {
    res += word1[i]
    i++
  }

  while (i < word2.length) {
    res += word2[i]
    i++
  }

  return res
}

// #3
const mergeAlternately3 = function(word1, word2) {
  const length = Math.max(word1.length, word2.length);
  let merge = '';
  for (let i = 0; i < length; i++) {
    merge += (word1[i] ?? '') + (word2[i] ?? '');
  }

  return merge;
}

// #4
const mergeAlternately = function(s, t) {
  let res = ''
  let i = 0

  while (i < s.length || i < t.length) {
    res += (s[i] || '') + (t[i] || '')
    i++
  }

  return res
}
