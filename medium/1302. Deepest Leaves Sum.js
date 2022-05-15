// 1302. Deepest Leaves Sum

// Given the root of a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:


// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
// Example 2:

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100


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

// #1
const deepestLeavesSum = function(root) {
  let maxDepth = 0
  const findDepth = (tree) => {
    if (!tree) return 0

    return maxDepth = Math.max(findDepth(tree.left), findDepth(tree.right)) + 1
  }
  findDepth(root)

  let sum = 0
  const computeSum = (tree, level) => {
    if (!tree) return sum
    if (level === 1) sum += tree.val

    computeSum(tree.left, level - 1)
    computeSum(tree.right, level - 1)
  }
  computeSum(root, maxDepth)

  return sum
};

// #2
const deepestLeavesSum2 = function(root) {
  let sum = 0
  let deepestLevel = 1
  function traverse(currentNode, currentLevel) {
    if (currentNode === null) return

    traverse(currentNode.left, currentLevel + 1)

    if (currentLevel === deepestLevel) {
      // sum the deepest node value
      sum += currentNode.val
    } else if (currentLevel > deepestLevel) {
      // if deeper level is discovered, reset sum and record the level
      deepestLevel = currentLevel
      sum = currentNode.val
    }
    traverse(currentNode.right, currentLevel + 1);
  }

  if(root) traverse(root, 1)

  return sum
};