// 647. Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

 

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
// #1
const countSubstrings = function(s) {
  let count = 0

  const pal = (l, r) => {
    count = 0
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }
    return count
  }

  for (let i = 0; i < s.length; i++) {
    count += pal(i, i)
    count += pal(i, i + 1)
  }

  return count
};

// #2
const countSubstrings2 = function(s) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    let l = i, r = i

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }

    l = i
    r = i + 1

    while (l >= 0 && r < s.length && s[l] == s[r]) {
      count++
      l--
      r++
    }
  }

  return count
};

// PYTHON 3
// class Solution:
//     def countSubstrings(self, s: str) -> int:
//         count = 0
        
//         def pal(s, l, r):
//             count = 0
            
//             while l >= 0 and r < len(s) and s[l] == s[r]:
//                 count += 1
//                 l -= 1
//                 r += 1
//             return count
        
//         for i in range(len(s)):
//             count += pal(s, i, i) # for odd palindroms
//             count += pal(s, i, i + 1) #for even palindroms
            
//         return count


// class Solution:
//     def countSubstrings(self, s: str) -> int:
//         l, r = 0, 0
//         num_palindromes = 0
//         while r < len(s):
//             while r<len(s) and s[r] == s[l]:
//                 r+=1
//             num_palindromes += ((r-l)*(r-l+1))//2
//             j = l-1
//             k = r
//             while j>=0 and k<len(s) and s[j]==s[k]:
//                 num_palindromes+=1
//                 j-=1
//                 k+=1
//             l = r
//         return num_palindromes