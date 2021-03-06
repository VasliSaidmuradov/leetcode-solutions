// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


/**
 * @param {string} s
 * @return {boolean}
 */

// Solutions:

// #0 - Time O(n) Space O(1)
const isPalindrome = function(s) {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    while (left < right && !isAlNum(s[left])) {
      left++
    }
    while (right > left && !isAlNum(s[right])) {
      right--
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false
    }

    left++
    right--
  }

  return true
}
  
  const isAlNum = (char) => {
    const code = char.charCodeAt(0)

    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  }



// #1
const isPalindrome1 = function(s) {
  const re = /[a-zA-Z0-9]/gi

  const arr = s.match(re)

  return arr?.join('').toLowerCase() === arr?.reverse().join('').toLowerCase()
}

// #2
const isPalindrome2 = s => {
	const newStr = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split("");
	
	let j = 0;

	for (let i = newStr.length - 1; i >= 0; i--) {
    if (newStr[i] != newStr[j]) {
      return false
    }

    j++
	}

	return true
}

// #3
const isPalindrome3 = function(s) {
  let str = s.replace(/[^A-Za-z0-9]/g,"").toLowerCase()
  let left = 0
  let right = str.length - 1

  while (left <= right){
    if (str[left] !== str[right]){
      return false
    }
    left++
    right--
  }

  return true
}