// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

// Solutions


// #1
const lengthOfLongestSubstring = function(s) {
  const charSet = new Set()
  let l = 0
  let longest = 0

  for (let i = 0; i < s.length; i++) {
    while (charSet.has(s[i])) {
      charSet.delete(s[l])
      l++
    }
    charSet.add(s[i])
    longest = Math.max(longest, i - l + 1)
  }

  return longest
};

// #1
// const lengthOfLongestSubstring = function(s) {
//   let max = ''
//   let temp = ''
//   const map = new Map()

//   let i = 0
//   let j = 0

//   while (j < s.length) {
//     if (!map.has(s[j])) {
//       map.set(s[j], true)
//       temp += s[j]
//       j++
//     } else {
//       if (temp.length > max.length) {
//           max = temp
//       }
//       temp = ''
//       map.clear()
//       i++
//       j = i
//     }
//   }
  
//   if (temp.length > max.length) {
//     max = temp
//   }

//   return max.length
// }


// #2
const lengthOfLongestSubstring2 = function(s) {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    seen[char] = i + 1
  }

  return longest
}


// PYTHON 3
// class Solution:
//     def lengthOfLongestSubstring(self, s: str) -> int:
//         charSet = set()
//         l = 0
//         res = 0
        
//         for r in range(len(s)):
//             while s[r] in charSet:
//                 charSet.remove(s[l])
//                 l += 1
//             charSet.add(s[r])
//             res = max(res, r - l + 1)
//         return res