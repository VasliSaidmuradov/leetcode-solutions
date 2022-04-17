// 897. Increasing Order Search Tree

// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

// Example 1:


// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
// Example 2:


// Input: root = [5,1,7]
// Output: [1,null,5,null,7]
 

// Constraints:

// The number of nodes in the given tree will be in the range [1, 100].
// 0 <= Node.val <= 1000


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
 * @return {TreeNode}
 */


// #1
const increasingBST = function(root) {
  const vals = []
  inorder(root, vals)
  const ans = new TreeNode(0)
  let cur = ans

  for (let val of vals) {
    cur.right = new TreeNode(val)
    cur = cur.right
  }

  return ans.right
}

const inorder = (node, vals) => {
  if (!node) return
  inorder(node.left, vals)
  vals.push(node.val)
  inorder(node.right, vals)
}

// #2
const increasingBST2 = function(root) {
  const ans = new TreeNode(0)
  let cur = ans

  const inorder = (node) => {
    if (!node) return
    inorder(node.left)
    node.left = null
    cur.right = node
    cur = node
    inorder(node.right)
  }
  inorder(root)

  return ans.right
}

// #3
const increasingBST3 = function(root) {
  let head = new TreeNode();
  let current = head;

  const inorder = (node) => {
    if(!node) return;

    inorder(node.left);

    current.right = new TreeNode(node.val);
    current = current.right;

    inorder(node.right);
  }

  inorder(root);
  return head.right;
}
