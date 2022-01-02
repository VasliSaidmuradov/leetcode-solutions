// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// s[i] == 'I' if perm[i] < perm[i + 1], and
// s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

// Example 1:

// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Example 2:

// Input: s = "III"
// Output: [0,1,2,3]
// Example 3:

// Input: s = "DDI"
// Output: [3,2,0,1]

// Constraints:

// 1 <= s.length <= 105
// s[i] is either 'I' or 'D'.


/**
 * @param {string} s
 * @return {number[]}
 */

// Solutions:

// #1
const diStringMatch = function(s) {
  const res = []
  let start = 0
  const nums = Array.from({ length: s.length + 1 }, () => (start += 1) - 1)

  for (let i = 0; i < s.length; i++) {
    if(s[i] === 'I') {
      res.push(nums.shift())
    } else {
      res.push(nums.pop())
    }
  }

  res.push(nums.pop())

  return res
}

// #2
const diStringMatch = function(s) {
  const res = []
  let min = 0
  let max = s.length

  for (let i = 0; i < s.length; i++) {
    if(s[i] === 'I') {
      res.push(min++)
    } else {
      res.push(max--)
    }
  }

  res.push(max)

  return res
}