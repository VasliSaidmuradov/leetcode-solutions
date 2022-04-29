// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

// Example 1:


// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105


/**
 * @param {number[]} height
 * @return {number}
 */

// #1
const trap = function(height) {
  if (!height.length) return 0

  let l = 0
  let r = height.length - 1
  let maxL = height[l]
  let maxR = height[r]
  let res = 0

  while (l < r) {
    if (maxL < maxR) {
      l++
      maxL = Math.max(maxL, height[l])
      res += maxL - height[l]
    } else {
      r--
      maxR = Math.max(maxR, height[r])
      res += maxR - height[r]
    }
  }

  return res
};

// PYTHON 3

// class Solution:
//     def trap(self, height: List[int]) -> int:
//         res = 0
//         l, r = 0, len(height) - 1
//         maxL, maxR = height[l], height[r]
        
//         while l < r:
//             if maxL < maxR:
//                 l += 1
//                 maxL = max(maxL, height[l])
//                 res += maxL - height[l]
//             else:
//                 r -= 1
//                 maxR = max(maxR, height[r])
//                 res += maxR - height[r]
//         return res