// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */


// Solution:

//#1
const lengthOfLastWord = function(s) {
	let str = s.trim()

	let count = 0
	let temp = ''

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] != ' ') count++
		else break
	}
  
	return count
}

// #2
const lengthOfLastWord = function(s) {
	let str = s.trim()

	let count = 0
	let temp = ''

	while (temp != ' ' && count < str.length) {
		temp = str[str.length - 1 - count]
		if (temp != ' ') count++
	}
  
	return count
}

// #3
const lengthOfLastWord = function(s) {
	let str = s.trim()

	let count = 0

	while (count < str.length) {
		if (str[str.length - 1 - count] != ' ') count++
		else break
	}
  
	return count
}

// #4
const lengthOfLastWord = function(s) {
	let str = s.trim()

	let idx = str.length - 1
	let count = 0

	while (idx >= 0) {
		if (str[idx] != ' ') {
			count++
			idx--
		}
		else break
	}
  
	return count
}