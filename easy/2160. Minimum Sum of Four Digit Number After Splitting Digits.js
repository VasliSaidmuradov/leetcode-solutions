// 2160. Minimum Sum of Four Digit Number After Splitting Digits

// You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

// For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
// Return the minimum possible sum of new1 and new2.

 

// Example 1:

// Input: num = 2932
// Output: 52
// Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
// Example 2:

// Input: num = 4009
// Output: 13
// Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
// The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
 

// Constraints:

// 1000 <= num <= 9999


/**
 * @param {number} num
 * @return {number}
 */

// #1
const minimumSum = function(num) {
  let arr = `${num}`.split('').sort((a, b) => a - b)

  return parseInt(`${arr[0]}${arr[2]}`) + parseInt(`${arr[1]}${arr[3]}`)
}

// #2
const minimumSum2 = num => {
  const digits = [];
  let n = num;

  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }

  digits.sort((a, b) => a - b);

  const first = (digits[0] * 10) + digits[2];
  const second = (digits[1] * 10) + digits[3];
  
  return first + second;
}