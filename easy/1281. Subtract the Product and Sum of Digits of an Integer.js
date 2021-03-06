// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5


// SolutIons: 

// #1
const subtractProductAndSum = function(n) {
  const arr = [...`${n}`].map(el => +el)
  
  const mul = arr.reduce((acc, el) => acc * el)
  const sum = arr.reduce((acc, el) => acc + el)
        
  return mul - sum
}

// #2
const subtractProductAndSum = function(n) {
  const digits = []
  let product = 1
  let sum = 0
  
  while(n >= 1) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  
  for (const digit of digits) {
    sum += digit
    product *= digit
  }
  
  return product - sum; 
}

// #3
const subtractProductAndSum = function(n) {
  const str = n.toString()
  let product = 1
  let sum = 0

  for (const s of str) {
    product *= +s
    sum += +s
  }

  return product - sum
}
