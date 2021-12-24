// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

// 'a' maps to ".-",
// 'b' maps to "-...",
// 'c' maps to "-.-.", and so on.
// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.

// Example 1:

// Input: words = ["gin","zen","gig","msg"]
// Output: 2
// Explanation: The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations: "--...-." and "--...--.".
// Example 2:

// Input: words = ["a"]
// Output: 1
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 12
// words[i] consists of lowercase English letters.


/**
 * @param {string[]} words
 * @return {number}
 */

// Solutions:

// #1
const LETTERS = {
    a: ".-", 
    b: "-...",
    c:  "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.", 
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
}

const uniqueMorseRepresentations = function(arr) {
  const mySet = new Set()

  for (let i = 0; i < arr.length; i++) {
    let morseWord = ''

    for (let j = 0; j < arr[i].length; j++) {
      morseWord += LETTERS[arr[i][j]]
    }

    mySet.add(morseWord)
  }

  return mySet.size
}

// #2
const uniqueMorseRepresentations = function(arr) {
  const letters = createLetterMorse()
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    let morseWord = ''

    for (let j = 0; j < arr[i].length; j++) {
      morseWord += letters[arr[i][j]]
    }

    if (!map.has(morseWord)) map.set(morseWord, 1)
  }

  return map.size
}

const createLetterMorse = () => {
  const numOfLetters = 26
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const charCode = 'a'.charCodeAt(0)

  const obj = {}

  for (let i = 0; i < numOfLetters; i++) {
    obj[String.fromCharCode(charCode + i)] = morse[i]
  }

  return obj
}
