// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]
 

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


// #1
const buildTree = function(preorder, inorder) {
  let preorderIdx = 0
  const inorderIdxMap = {}

  for (let i = 0; i < inorder.length; i++) {
    inorderIdxMap[inorder[i]] = i
  }

  const arrayToTree = (left, right) => {
    if (left > right) {
      return null
    }

    const rootValue = preorder[preorderIdx]
    const root = new TreeNode(rootValue)

    preorderIdx += 1

    root.left = arrayToTree(left, inorderIdxMap[rootValue] - 1)
    root.right = arrayToTree(inorderIdxMap[rootValue] + 1, right)

    return root
  }

  return arrayToTree(0, preorder.length - 1)
};