// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

 

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 

// Constraints:

// 2 <= s.length <= 200
// s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
// The number of words in s is between 1 and 9.
// The words in s are separated by a single space.
// s contains no leading or trailing spaces.


/**
 * @param {string} s
 * @return {string}
 */

// Solutions:

// #1
const sortSentence = function(s) {
  let arr = s.split(' ')

  arr.sort((a, b) => a[a.length - 1] - b[b.length - 1])
  arr = arr.map(el => {
    return el.slice(0, -1)
  })

  return arr.join(' ')
}

// #2
const sortSentence = function(s) {
  let arr = s.split(' ')
  const obj = {}
  let ans = ''

  for (let i = 0; i < arr.length; i++) {
    const lastChar = arr[i][arr[i].length - 1]

    obj[lastChar] = arr[i].slice(0, -1)
  }

  for (let j = 1; j <= arr.length; j++) {
    ans += obj[j] + ' '
  }

  return ans.trim()
}

// #3
const sortSentence = function(s) {
  return s
    .split(' ')
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map(word => word.slice(0, -1))
    .join(' ')
}