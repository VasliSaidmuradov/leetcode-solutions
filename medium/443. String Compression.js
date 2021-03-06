// 443. String Compression

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

 

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

// Constraints:

// 1 <= chars.length <= 2000
// chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.


/**
 * @param {character[]} chars
 * @return {number}
 */


// #1
const compress = function(chars) {
  if (chars.length < 2) return chars.length

  let temp = ''
  let i = 0
  let j = 1
  let n = 0
  let left, right

  while (j < chars.length) {
    left = chars[i]
    right = chars[j]

    if (left !== right) {
      if (j - i === 1) {
        temp = left
      } else{
        temp = left + (j - i)
      }
      chars.splice(n, temp.length, ...temp)
      n += temp.length
      i = j
    }

    j++
  }

  if (j - i === 1) {
    temp = chars[i]
  } else{
    temp = chars[i] + (j - i)
  }
  chars.splice(n, temp.length, ...temp)
  n += temp.length
  chars.length = n

  return n
}

// #1-1
const compress2 = function(chars) {
  if (chars.length < 2) return chars.length

  let temp = ''
  let i = 0
  let j = 1
  let n = 0

  const addToChars = () => {
    if (j - i === 1) {
      temp = chars[i]
    } else{
      temp = chars[i] + (j - i)
    }
    chars.splice(n, temp.length, ...temp)
    n += temp.length
  }

  while (j < chars.length) {
    if (chars[i] !== chars[j]) {
      addToChars()
      i = j
    }

    j++
  }

  addToChars()
  chars.length = n
}

// #2
const compress3 = function(chars) {
  let lastChar=chars[0]
  let count=1
  let out=[]
  
  for(let i = 1; i < chars.length; i++){
    if(chars[i]==lastChar){
      count++
    } else {
      out.push(lastChar)
      
      if(count>1) {
        out.push(...[...(count + '')])
      }

      lastChar = chars[i]
      count = 1
    }
  }

  out.push(lastChar)
  if(count > 1) {
    out.push(...[...(count + '')])
  }

  chars.length = 0
  
  out.forEach(x => {
    chars.push(x)
  })
}


// #4 Time O(N) | Space O(1)
const compress4 = function(chars) {
  let l = 0
  let r = 1
  let count = 0

  while (r < chars.length) {
    let temp = ''
    while (chars[l] === chars[r]) {
      r++
    }
    count = r - l

    if (count > 1) {
      temp += count
    }

    chars.splice(l+1, count-1, ...temp)
    l += temp.length+1
    r = l+1
  }
};