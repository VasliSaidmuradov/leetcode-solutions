// 1880. Check if Word Equals Summation of Two Words

// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

 

// Example 1:

// Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
// Output: true
// Explanation:
// The numerical value of firstWord is "acb" -> "021" -> 21.
// The numerical value of secondWord is "cba" -> "210" -> 210.
// The numerical value of targetWord is "cdb" -> "231" -> 231.
// We return true because 21 + 210 == 231.
// Example 2:

// Input: firstWord = "aaa", secondWord = "a", targetWord = "aab"
// Output: false
// Explanation: 
// The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aab" -> "001" -> 1.
// We return false because 0 + 0 != 1.
// Example 3:

// Input: firstWord = "aaa", secondWord = "a", targetWord = "aaaa"
// Output: true
// Explanation: 
// The numerical value of firstWord is "aaa" -> "000" -> 0.
// The numerical value of secondWord is "a" -> "0" -> 0.
// The numerical value of targetWord is "aaaa" -> "0000" -> 0.
// We return true because 0 + 0 == 0.
 

// Constraints:

// 1 <= firstWord.length, secondWord.length, targetWord.length <= 8
// firstWord, secondWord, and targetWord consist of lowercase English letters from 'a' to 'j' inclusive.


/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */


// Solutions:

// #1
const isSumEqual = function(firstWord, secondWord, targetWord) {
  const letters = {
    a: '0',
    b: '1',
    c: '2',
    d: '3',
    e: '4',
    f: '5',
    g: '6',
    h: '7',
    i: '8',
    j: '9',
  }

  let firstNum = ''
  let secondNum = ''

  for (let i = 0; i < firstWord.length; i++) {
    firstNum += letters[firstWord[i]]
  }

  for (let i = 0; i < secondWord.length; i++) {
    secondNum += letters[secondWord[i]]
  }

  let num1 = Math.abs(firstNum)
  let num2 = Math.abs(secondNum)

  const num = num1 + num2
  let targetNum = ''

  for (let i = 0; i < targetWord.length; i++) {
    targetNum += letters[targetWord[i]]
  }

  targetNum = Math.abs(targetNum)

  return num === targetNum
}

// #2
const isSumEqual = function(firstWord, secondWord, targetWord) {
  let s1 = ""
  for (let i = 0; i < firstWord.length; i++) {
    s1 += (firstWord.charCodeAt(i) - 97).toString()
  }

  let s2 = ""
  for (let i = 0; i < secondWord.length; i++) {
    s2 += (secondWord.charCodeAt(i) - 97).toString()
  }

  let s3 = ""
  for (let i = 0; i < targetWord.length; i++) {
    s3 += (targetWord.charCodeAt(i) - 97).toString()
  }

  return (Number(s1) + Number(s2)) === Number(s3)
}

// #3
const isSumEqual = function(firstWord, secondWord, targetWord) {
  return sumWord(firstWord) + sumWord(secondWord) === sumWord(targetWord);
}

const sumWord = function(word) {
  const OFFSET = 97
  return [...word].reduce((total, c) => total * 10 + c.charCodeAt(0) - OFFSET, 0)
}
