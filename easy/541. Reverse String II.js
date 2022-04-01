// 541. Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// #1
const reverse = (string) => {
  let s = [...string]
  let i = 0, j = s.length - 1
  while (i < j) {
    let temp = s[i]
    s[i] = s[j]
    s[j] = temp
    i++
    j--
  }
  return s.join('')
}

const reverseStr = function(s, k) {
  let str = s
  let i = 0
  while (i < s.length) {
    let subStr = reverse(s.slice(i, i + k))
    str = str.slice(0, i) + subStr + str.slice(i + k)
    i = i + k * 2
  }
  return str
}

// #2
const reverseStr2 = function(s, k) {
  if (s.length < k) {
    return s.split('').reverse().join('');
  }

  let arr = s.split('')

  for(let i = 0; i < s.length; i += 2 * k) {
    const reverse = arr.splice(i, k).reverse()
  
    arr.splice(i, 0, ...reverse)
  }

  return arr.join('')
}