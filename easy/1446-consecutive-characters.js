// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.
 

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5
// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:

// Input: s = "tourist"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 500
// s consists of only lowercase English letters.


/**
 * @param {string} s
 * @return {number}
 */

// Solutions: 

// #1
const maxPower = function(s) {
	let longest = 0
	let temp = ''

	let i = 0
	let j = i + 1

	while (j <= s.length) {
		temp = s.slice(i, j)

		if (s[i] !== s[j]) {
			longest = longest > temp.length ? longest : temp.length

			i = j
			j++
		} else {
			j++
		}
	}
    
  return longest  
}


// #2
function maxPower (s) {
  let longest = -Infinity
  let i = 0
  for (let j = 0; j < s.length; j++){
    if (s[i] !== s[j]) i = j
    if ((j-i)+1 > longest){
      longest = (j-i) + 1
    }
  }
  
  return longest
}
