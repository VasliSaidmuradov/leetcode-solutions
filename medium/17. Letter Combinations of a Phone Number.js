// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */

// #1
const digitToLetterMap = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

function letterCombinations(digits) {
  if(!digits.length) return [];

  if(digits.length === 1) {
    return digitToLetterMap[digits].split('')
  }

  const [head, tail] = [digits.slice(0,1), digits.slice(1)]
  const previousCombinations = letterCombinations(tail)
  const currentDigitCharacters = digitToLetterMap[head].split('')

  return currentDigitCharacters.reduce(
    (accumulator, character) => {
      const characterCobinations = previousCombinations.map(
        (combination) => `${character}${combination}` 
      )
      accumulator.push(...characterCobinations);
      return accumulator
    } 
    ,[]
  )
}


// #2
const letterCombinations = function(digits) {
  if (!digits.length) return []
  const hmap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  const ans = []

  const backtrack = (i, s) => {
    if (s.length === digits.length) {
      ans.push(s.join(''))
      return
    }

    for (const c of hmap[digits[i]]) {
      s.push(c)
      backtrack(i + 1, s)
      s.pop()
    }
  }

  backtrack(0, [])
  return ans
}