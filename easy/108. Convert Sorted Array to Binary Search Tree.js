// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.108. Convert Sorted Array to Binary Search Tree


// #1
const sortedArrayToBST = function(nums) {
  const helper = (nums) => {
    if (!nums.length) {
      return null
    }

    let mid = Math.floor(nums.length / 2)
    const tree = new TreeNode(nums[mid])

    tree.left = helper(nums.slice(0, mid))
    tree.right = helper(nums.slice(mid+1))

    return tree
  }

  return helper(nums)
};

// #2
const sortedArrayToBST2 = function(nums) {
  const helper = (l, r) => {
    if (l > r) {
      return null
    }

    let mid = r - Math.floor((r - l) / 2)
    const tree = new TreeNode(nums[mid])

    tree.left = helper(l, mid-1)
    tree.right = helper(mid+1, r)

    return tree
  }

  return helper(0, nums.length-1)
};