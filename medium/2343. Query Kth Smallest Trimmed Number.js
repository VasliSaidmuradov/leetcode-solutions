// 2343. Query Kth Smallest Trimmed Number

// You are given a 0-indexed array of strings nums, where each string is of equal length and consists of only digits.

// You are also given a 0-indexed 2D integer array queries where queries[i] = [ki, trimi]. For each queries[i], you need to:

// Trim each number in nums to its rightmost trimi digits.
// Determine the index of the kith smallest trimmed number in nums. If two trimmed numbers are equal, the number with the lower index is considered to be smaller.
// Reset each number in nums to its original length.
// Return an array answer of the same length as queries, where answer[i] is the answer to the ith query.

// Note:

// To trim to the rightmost x digits means to keep removing the leftmost digit, until only x digits remain.
// Strings in nums may contain leading zeros.
 

// Example 1:

// Input: nums = ["102","473","251","814"], queries = [[1,1],[2,3],[4,2],[1,2]]
// Output: [2,2,1,0]
// Explanation:
// 1. After trimming to the last digit, nums = ["2","3","1","4"]. The smallest number is 1 at index 2.
// 2. Trimmed to the last 3 digits, nums is unchanged. The 2nd smallest number is 251 at index 2.
// 3. Trimmed to the last 2 digits, nums = ["02","73","51","14"]. The 4th smallest number is 73.
// 4. Trimmed to the last 2 digits, the smallest number is 2 at index 0.
//    Note that the trimmed number "02" is evaluated as 2.
// Example 2:

// Input: nums = ["24","37","96","04"], queries = [[2,1],[2,2]]
// Output: [3,0]
// Explanation:
// 1. Trimmed to the last digit, nums = ["4","7","6","4"]. The 2nd smallest number is 4 at index 3.
//    There are two occurrences of 4, but the one at index 0 is considered smaller than the one at index 3.
// 2. Trimmed to the last 2 digits, nums is unchanged. The 2nd smallest number is 24.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i].length <= 100
// nums[i] consists of only digits.
// All nums[i].length are equal.
// 1 <= queries.length <= 100
// queries[i].length == 2
// 1 <= ki <= nums.length
// 1 <= trimi <= nums[i].length


// #1
const smallestTrimmedNumbers = function(nums, queries) {
  const def = []
  const seen = new Map()
  for (let i = 0; i < nums.length; i++) {
    def.push([nums[i], i])
  }
  
  const len = nums[0].length
  const res = []
  let temp

  for (let [k, trim] of queries) {
    const key = `${k}-${trim}`
    if (seen.has(key)) {
      res.push(seen.get(key))
      continue
    }

    temp = def.map(e => [...e])

    for (let i = 0; i < temp.length; i++) {
      temp[i][0] = temp[i][0].slice(-trim)
    }

    temp.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1
      } else if (a[0] > b[0]) {
        return 1 
      } else {
        return a[1] - b[1]
      }
    })

    const currMin = findMin(temp, k)
    seen.set(key, currMin)
    res.push(currMin)
  }

  return res
};

const findMin = (arr, k) => {
  return arr[k - 1][1]
}

// #2
const smallestTrimmedNumbers2 = function(nums, queries) {
  let res = []
  for (let [k, trim] of queries) {
    const arr = nums.map((el, idx) => {
      return { idx,  el: el.slice(-trim) }
    })

    arr.sort((a, b) => {
      if(a.el === b.el) {
        return a.idx - b.idx
      }
      return a.el.localeCompare(b.el)
    })

    res.push(arr[k - 1].idx)
  }
  return res
};