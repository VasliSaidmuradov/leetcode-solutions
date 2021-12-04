// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

 

// Example 1:

// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
// Example 2:

// Input: s = "a1b2c3d4e"
// Output: "abbdcfdhe"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('b',2) = 'd'
// - s[5] -> shift('c',3) = 'f'
// - s[7] -> shift('d',4) = 'h'
 

// Constraints:

// 1 <= s.length <= 100
// s consists only of lowercase English letters and digits.
// shift(s[i-1], s[i]) <= 'z' for all odd indices i.

/**
 * @param {string} s
 * @return {string}
 */

// Solutions:

// #1
const replaceDigits = function(s) {
	const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	
	let ans = [...s]

	for (let i = 1; i < s.length; i += 2) {
		const num = +s[i]
		const char = s[i - 1]

		const idx = alphabet.indexOf(char)

		ans[i] = alphabet[idx + num]
	}

	return ans.join('')
}

// #2
const replaceDigits = function(s) {
	let ans = [...s]

	for (let i = 1; i < s.length; i += 2) {
		const num = +s[i]
		const char = s[i - 1]

		ans[i] = String.fromCharCode(char.charCodeAt(0) + num)
	}

	return ans.join('')
}