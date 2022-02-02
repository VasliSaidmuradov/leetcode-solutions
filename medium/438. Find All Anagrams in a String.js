// 438. Find All Anagrams in a String

// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
  const res = []
  const sortedP = [...p].sort().join('')

  let i = 0
  let j = i + p.length

  while (j <= s.length) {
    const str = s.slice(i, j)

    if (isAnagram(str, sortedP)) {
      res.push(i)

      i++
      j++

      while (j <= s.length) {
        if (s[i - 1] === s[j - 1]) {
          res.push(i)
          i++
          j++
        } else {
          break
        }
      }
    } else {
      i++
      j++
    }
  }

  return res
}

const isAnagram = (str1, str2) => {
  return [...str1].sort().join('') === str2
}
