// 316. Remove Duplicate Letters

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
 

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/


/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function(s) {
  const cnt = {}
  const vis = {}

  let res = ""
  let n = s.length

  for (let i = 0; i < n; i++)
    cnt[s[i]] = (cnt[s[i]] || 0) + 1

  for (let i = 0; i < n; i++) {
    // decrease cnt of current character
    cnt[s[i]]--

    // If character is not already
    // in answer
    if (!vis[s[i]]) {
      // Last character > s[i]
      // and its count > 0
      while (res.length > 0 && res[res.length - 1] > s[i] && cnt[res[res.length - 1]] > 0) {
        // marking letter visited
        vis[res[res.length - 1]] = 0
        res = res.slice(0, -1)
      }

      // Add s[i] in res and
      // mark it visited
      res += s[i]
      vis[s[i]] = 1
    }
  }
  // return resultant string
  return res
}