// 1641. Count Sorted Vowel Strings


// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

// Example 1:

// Input: n = 1
// Output: 5
// Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
// Example 2:

// Input: n = 2
// Output: 15
// Explanation: The 15 sorted strings that consist of vowels only are
// ["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
// Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
// Example 3:

// Input: n = 33
// Output: 66045
 

// Constraints:

// 1 <= n <= 50 


/**
 * @param {number} n
 * @return {number}
 */

// #1
const countVowelStrings = function(n) {
  let a = 1, e = 1, i = 1, o = 1, u = 1

  while (n > 1) {
    o += u
    i += o
    e += i
    a += e

    n--
  }

  return a + e + i + o + u
};

// #2
const countVowelStrings2 = function(n) {
  let arr = [1, 1, 1, 1, 1]

  while (n > 1) {
    for (let i = 3; i >= 0; i--) {
      arr[i] += arr[i + 1]
    }
    n--
  }

  return arr.reduce((acc, el) => acc + el)
};

// #1
// PYTHON 3
// class Solution:
//     def countVowelStrings(self, n: int) -> int:
//         a, e, i, o, u = 1, 1, 1, 1, 1
        
//         while n > 1:
//             o += u
//             i += o            
//             e += i
//             a += e
            
//             n -= 1
        
//         return a + e + i + o + u


// #2
// class Solution:
//     def countVowelStrings(self, n: int) -> int:
//         arr = [1,1,1,1,1]
        
//         while n > 1:
//             for i in range(1, 5):
//                 arr[i] += arr[i - 1]
                
//             n -= 1
        
//         return sum(arr)