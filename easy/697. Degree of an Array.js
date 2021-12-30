// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.


/**
 * @param {number[]} nums
 * @return {number}
 */

// Solutions: 

// #1
const findShortestSubArray = function(nums) {
  let min = nums.length

  const maxNums = findMaxNumbers(nums)

  for (let num of maxNums) {
    let i = 0
    let j = nums.length  - 1

    while (i <= j) {
      if (nums[i] === num && nums[j] === num) {
        min = Math.min(min, j - i + 1)
        break
      } else if(nums[i] !== num) {
        i++
      } else {
        j--
      }
    }
  }

  return min
}

const findMaxNumbers = (nums) => {
  const obj = {}

  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1
  }

  const arr = []
  const max = Math.max(...Object.values(obj))

  for (let prop in obj) {
    if (obj[prop] === max) arr.push(+prop)
  }	

  return arr
}

// #2
const findShortestSubArray = function(nums) {
  let min = nums.length
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]].lastIdx = i
      obj[nums[i]].count += 1
      obj[nums[i]].res = obj[nums[i]].lastIdx - obj[nums[i]].firstIdx + 1
    } else {
      obj[nums[i]] = { count: 1, firstIdx: i, lastIdx: i, res: 1 }
    }
  }

  let count = 0

  for (let prop in obj) {
    if (obj[prop].count > count) {
      count = obj[prop].count

      min = obj[prop].res
    } else if (obj[prop].count === count) {
      if (obj[prop].res < min) {
        min = obj[prop].res
      }
    }
  }

  return min
}

// #3
const findShortestSubArray = (nums) => {
  let hash = {}
	
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (hash[num]) {
      hash[num].count++
      hash[num].endIdx = i
    } else {
      hash[num] = {
        count: 1,
        startIdx: i,
        endIdx: i
      }
    }
  }

  let max = hash[nums[0]]

  for (let key in hash) {
    if (max.count < hash[key].count) {
      max = hash[key]
    } else if (max.count === hash[key].count) {
      if (max.endIdx - max.startIdx > hash[key].endIdx - hash[key].startIdx) {
        max = hash[key]
      }
    }
  }

return max.endIdx - max.startIdx + 1
}