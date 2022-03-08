// 389. Find the Difference

// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

 

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
 

// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// #1 
const findTheDifference1 = function(s, t) {
  s = [...s].sort();
  t = [...t].sort();

  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) return t[i];
  }
}

// #2
const findTheDifference2 = function(s, t) {
  const obj1 = {}
  const obj2 = {}


  for (let i = 0; i < t.length; i++) {
    obj1[t[i]] = (obj1[t[i]] || 0) + 1

    if (s[i]) {
      obj2[s[i]] = (obj2[s[i]] || 0) + 1
    }
  }

  for(const prop in obj1) {
    if (obj1[prop] !== obj2[prop]) return prop
  }
}


// #3
const findTheDifference3 = function(s, t) {
  let res = 0
  
  for (let i = 0; i < s.length; i++) {
    res ^= s.charCodeAt(i)
    res ^= t.charCodeAt(i)
  }

  res ^= t.charCodeAt(t.length - 1)

  return String.fromCharCode(res)
}