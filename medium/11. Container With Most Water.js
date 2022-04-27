// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104



// #1
const maxArea = function(h) {
  let area = 0
  let i = 0
  let j = h.length - 1

  while (i < j) {
    area = Math.max(area, Math.min(h[i], h[j]) * (j - i))
    h[i] <= h[j] ? i++ : j--
  }

  return area
}

// #2
const maxArea2 = function(height) {
  let i = 0
  let j = height.length - 1
  let maxArea = 0

  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j])

    maxArea = Math.max(maxArea, area)

    height[i] <= height[j] ? i++ : j--
  }

  return maxArea
}

// #3
const maxArea3 = function(h) {
  let max = 0
  let l = 0
  let r = h.length - 1

  while (l < r) {
    max = Math.max(max, Math.min(h[l], h[r]) * (r - l))
    if (h[l] <= h[r]) {
      l++
    } else {
      r--
    }
  }

  return max
};

// #4
const maxArea4 = function(h) {
  let max = 0
  let l = 0
  let r = h.length - 1

  while (l < r) {
    if (h[l] < h[r]) {
      max = Math.max(max, h[l] * (r - l))
      l++
    } else {
      max = Math.max(max, h[r] * (r - l))
      r--
    }
  }

  return max
};