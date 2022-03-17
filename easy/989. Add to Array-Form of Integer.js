// 989. Add to Array-Form of Integer

// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
 

// Constraints:

// 1 <= num.length <= 104
// 0 <= num[i] <= 9
// num does not contain any leading zeros except for the zero itself.
// 1 <= k <= 104


/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */


// #1
const addToArrayForm = function(num, k) {
  let carry = 0;
  let i = num.length - 1;

  while (i >= 0 || k > 0 || carry > 0) {
    let cur = num[i] || 0;
    let sum = cur + carry + (k % 10);

    if (i >= 0) {
      num[i] = sum % 10;
    } else {
      num.unshift(sum % 10);
    }

    carry = Math.floor(sum / 10);
    k = Math.floor(k / 10);
    i--;
  }

  return num;
}


// 
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / (10**place)) % 10
}

// #2
const addToArrayForm2 = function(num, k) {
  const arr = []
  let i = `${k}`.length - 1

  while (i >= 0) {
    temp = getDigit(k, i)
    arr.push(temp)
    i--
  }

  const res = new Array(num.length > arr.length ? num.length : arr.length).fill(0)

  let carry = 0
  i = num.length - 1
  let j = arr.length - 1
  let l = res.length - 1

  while (i >= 0 || j >= 0) {
    let a = num[i] || 0
    let b = arr[j] || 0
    let sum = a + b + carry
    carry = getDigit(sum, 1)

    if (sum < 10) {
      res[l] = sum
    } else {
      res[l] = sum % 10
    }

    i--
    j--
    l--
  }

  if (carry) res.unshift(1)

  return res
}

// #3
const addToArrayForm3 = function(num, k) {
  let n = num.length - 1
  let cur = k
  const ans = []
  let i = n

  while (i >= 0 || cur > 0) {
    if (i >= 0) {
      cur += num[i]	
    }
    
    ans.push(cur % 10)
    cur = Math.floor(cur / 10)
    i--
  }

  return ans.reverse()
}