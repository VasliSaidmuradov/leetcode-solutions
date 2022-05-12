// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:


// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100


// #1
const invertTree = function(root) {
  if (!root) return null

  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
};

// #2
const invertTree2 = function(root) {
  if (!root) return null
  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.left = right
  root.right = left 
  return root
};


// PYTHON 3
// class Solution:
    // def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        // if not root:
            // return None
        // l = self.invertTree(root.left)
        // r = self.invertTree(root.right)
        // root.left = r
        // root.right = l
        // return root