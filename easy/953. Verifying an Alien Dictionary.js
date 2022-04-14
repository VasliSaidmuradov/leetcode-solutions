// 953. Verifying an Alien Dictionary

// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */


// #1
const isAlienSorted = function(words, order) {
  const sorted = [...words]

  sorted.sort((a, b) => {
    let i = 0
    while (i < a.length && i < b.length) {
      let aa = (order.indexOf(a[i]) || order.indexOf(a[i]) !== 0) || -1
      let bb = (order.indexOf(b[i]) || order.indexOf(b[i]) !== 0) || -1
      if (aa < bb) return -1
      if (aa > bb) return 1
      i++
    }
    return a.length - b.length
  })

  for (let i = 0; i < sorted.length; i++) {
  if (sorted[i] !== words[i]) return false
  }

  return true
};

// #2
const isAlienSorted2= function(words, order) {
  let map = new Map();

  let i = 1;
  for(let ch of order) {
    map.set(ch, i);
    i++;
  }

  for(let i = 0; i < words.length - 1; i++) {
    const length = Math.max(words[i].length, words[i+1].length);

    for (let j = 0; j < length; j++) {
      let a = map.get(words[i][j]) || - 1;
      let b = map.get(words[i + 1][j]) || - 1;

      if (b < a) return false;
      if (b > a) break;
    }
  }

  return true;
}