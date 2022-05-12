// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

// #1
const maxDepth = function(root, depth = 0) {
  if (!root) return depth
  return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1))
};

// #2
const maxDepth2 = function(root) {
  if (!root) return 0

  let maxLeft = maxDepth(root.left)
  let maxRight = maxDepth(root.right)

  return Math.max(maxLeft, maxRight) + 1
};


// PYTHON 3

// class Solution:
//     def maxDepth(self, root: Optional[TreeNode]) -> int:
//         if not root:
//             return 0
//         return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))