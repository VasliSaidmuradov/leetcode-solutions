// 1433. Check If a String Can Break Another String

// Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

// A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.

 

// Example 1:

// Input: s1 = "abc", s2 = "xya"
// Output: true
// Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".
// Example 2:

// Input: s1 = "abe", s2 = "acd"
// Output: false 
// Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.
// Example 3:

// Input: s1 = "leetcodee", s2 = "interview"
// Output: true
 

// Constraints:

// s1.length == n
// s2.length == n
// 1 <= n <= 10^5
// All strings consist of lowercase English letters.

// #1
const checkIfCanBreak = function(s1, s2) {
	s1 = [...s1].sort().join('')
	s2 = [...s2].sort().join('')

	let b1 = true, b2 = true
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] < s2[i]) b1 = false
		if (s1[i] > s2[i]) b2 = false
	}

	return b1 || b2
};

// #2
const checkIfCanBreak2 = function(s1, s2) {
	let greater_count = 0;
	let smaller_count = 0;
	let cnt1 = 0;
	let cnt2 = 0;
	for (let i = 0; i < 26; i++) {
		const c = String.fromCodePoint(97 + i);
		const regex = new RegExp(`${c}`, 'g');
		cnt1 += (s1.match(regex) || []).length;
		cnt2 += (s2.match(regex) || []).length;

		if (cnt1 < cnt2) {
			smaller_count = 1;
		} else if (cnt1 > cnt2) {
			greater_count = 1;
		}
		if (smaller_count && greater_count) {
			return false;
		}
	}
	return true;
};