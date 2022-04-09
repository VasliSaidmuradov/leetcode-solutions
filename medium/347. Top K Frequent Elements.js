// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


// #1
const topKFrequent = function(nums, k) {
  const res = []
  const obj = {}

  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1
  }

  const temp = Object.entries(obj).sort((a, b) => b[1] - a[1])

  for (let i = 0; i < k; i++) {
    res.push(+temp[i][0])
  }

  return res
}

// #2
const topKFrequent2 = function(nums, k) {
  nums.sort((a,b) => a - b)
  const res = []
  let count = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      res.push([count, nums[i]])
      count = 1
    } else {
      count++
    }
  }
  return res.sort((a, b) => b[0] - a[0]).map(el => el[1]).slice(0,k)
}