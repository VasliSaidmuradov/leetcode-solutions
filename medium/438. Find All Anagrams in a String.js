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

// #1
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


// #2
// Good solution with explanation
const findAnagrams = function(s, p) {

  // initialize output array to be returned at the end and neededChars object to store the chars in p.
  const output = []
  const neededChars = {}

  // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++
    } else {
      neededChars[char] = 1
    }
  }

  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0
  let right = 0 
  let count = p.length 

  // start sliding the window
  while (right < s.length) {

    // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0), 
    // then decrease the count which is the total number of chars that are needed and that still haven't been found.
    if (neededChars[s[right]] > 0) count--

    // decrease the needed amount for the current char and move the window's right end one step forward.
    neededChars[s[right]]--
    right++

    // if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
    if (count === 0) output.push(left)

    // at first, the window will increase its length by taking steps forward with its right end.
    // after the window length reaches p's length for the first time,
    // the window will start moving forward like a caterpillar with the left end moving first. 
    if (right - left == p.length) {

      // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
      if (neededChars[s[left]] >= 0) count++

      // the lines below are the most important to understand: 
      // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string, 
      // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
      neededChars[s[left]]++
      left++
    }
  }

  return output
}