// You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.

// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.

// The test cases are generated so that the answer fits in a 32-bits integer.

// Example 1:


// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
// Example 2:

// Input: root = [0]
// Output: 0
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// Node.val is 0 or 1.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// Solutions:

// #1
const sumRootToLeaf = function(root) {
  let result = []
  let total = 0
  if(!root) return total

  const dfs = (root, curr = "") => {
    if(root.val !== null) curr += root.val
    if(root.left !== null) dfs(root.left, curr)
    if(root.right !== null) dfs(root.right, curr)
    if(root.left === null && root.right === null) result.push(curr)
  }

  dfs(root)

  result.forEach(el => total += parseInt(el, 2))
  
  return total
}

// #2
const sumRootToLeaf = function(root) {
  const helper = (root, val) => {
    if(root === null) return 0
    val = val * 2 + root.val

    return (root.left === root.right) ? val : helper(root.left, val) + helper(root.right, val);
  }

  return helper(root, 0)
}