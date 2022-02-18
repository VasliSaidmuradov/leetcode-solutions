// 402. Remove K Digits

// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

// Constraints:

// 1 <= k <= num.length <= 105
// num consists of only digits.
// num does not have any leading zeros except for the zero itself.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

// #1
const removeKdigits = function(num, k) {
  if (k == num.length)
  return '0'

  let i = 0, stack = []

  while (i < num.length) {
    let curr = num[i]
    while (k > 0 && stack.length && stack[stack.length - 1] > curr) {
      stack.pop()
      k--
    }

    stack.push(curr)
    i++
  }

  while (k-- > 0) {
    stack.pop()
  }

  let res = stack.join('')

  if (/[1-9]/.test(res)) {
    return res.replace(/^0+/,'')
  }

  return '0'
}

// #2
const removeKdigits = function(num, k) {
  const numArr = Array.from(num)

  if(k === numArr.length){
    return '0'
  }

  if(k === 0){
    return num
  }

  let stack = []

  for(let digit of numArr){
    while(k > 0 && stack.length && stack[stack.length - 1] > digit){
      --k
      stack.pop()
    }

    stack.push(digit)
  }

  while(k > 0){
    --k
    stack.pop()
  }

  let j = 0

  while(stack[j] === '0'){
    stack[j] = ''
    ++j
  }


  return stack.join('') || '0'
}
