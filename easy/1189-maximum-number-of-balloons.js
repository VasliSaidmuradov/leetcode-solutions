// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.


// Example 1:


// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.


// Solutions:

// #1
const maxNumberOfBalloons = function(text) {
  const obj = {}
  const target = 'balloon'

  for (let i = 0; i < text.length; i++) {
    if (target.includes(text[i])) {
      obj[text[i]] = obj[text[i]] ? obj[text[i]] + 1 : 1
    }
  }

  let count = 0

  while (true) {
    let j = 0

    for (; j < target.length; j++) {
      if (!obj[target[j]]) return count
          
      obj[target[j]] -= 1
    }
    j = 0
    count++

    if (!obj[target[j]]) return count
  }
}

// #2
const maxNumberOfBalloons = function(text) {
  bc = (text.match(/b/g)||[]).length
  ac = (text.match(/a/g)||[]).length
  lc = Math.floor((text.match(/l/g)||[]).length / 2)
  oc = Math.floor((text.match(/o/g)||[]).length / 2)
  nc = (text.match(/n/g)||[]).length
  return Math.min(...[bc,ac,lc,oc,nc])
}