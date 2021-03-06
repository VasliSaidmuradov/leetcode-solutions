// 1356. Sort Integers by The Number of 1 Bits

// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.


// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]
// Example 2:

// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
 

// Constraints:

// 1 <= arr.length <= 500
// 0 <= arr[i] <= 104


/**
 * @param {number[]} arr
 * @return {number[]}
 */

// Solutions:

// #1
const sortByBits1 = function(arr) {
  const hammingWeight = n => {
    n = (n).toString(2)
  
    let count = 0
  
    for(let i = 0; i < n.length; i++) {
      if (n[i] === 1) count++
    }
  
    return count
  }

  const sorted = arr.sort((a, b) => {
    const aa = hammingWeight(a)
    const bb = hammingWeight(b)

    if (aa < bb) return -1
    else if (bb < aa) return 1
    else return a - b
  })

  return sorted
}

// #2
const sortByBits2 = function(arr) {
  const hammingWeight = n => {
    let count = 0
  
    while(n) {
      count += n & 1
      n >>= 1
    }
  
    return count
  }

  return arr.sort((a, b) => hammingWeight(a) - hammingWeight(b) || a - b)
}

// #3
const sortByBits = function(arr) {
  const getBits = (num) => {
    let count = 0

    while (num) {
      count += num & 1
      num >>= 1
    }

    return count
  }

  return arr.sort((a, b) => getBits(a) - getBits(b) || a - b)
}
