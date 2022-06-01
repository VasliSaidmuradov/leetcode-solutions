// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree


// Given two binary trees original and cloned and given a reference to a node target in the original tree.

// The cloned tree is a copy of the original tree.

// Return a reference to the same node in the cloned tree.

// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

 

// Example 1:


// Input: tree = [7,4,3,null,null,6,19], target = 3
// Output: 3
// Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.
// Example 2:


// Input: tree = [7], target =  7
// Output: 7
// Example 3:


// Input: tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4
// Output: 4
 

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// The values of the nodes of the tree are unique.
// target node is a node from the original tree and is not null.
 

// Follow up: Could you solve the problem if repeated values on the tree are allowed?


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

// #1
const getTargetCopy = function(original, cloned, target) {
  const queue = [cloned];

  while (queue.length) {
    const queued = queue.shift();

    if (queued.val === target.val) {
      return queued;
    }

    if (queued.left) {
      queue.push(queued.left)
    }

    if (queued.right) {
      queue.push(queued.right)
    }
  }

  return null;
};

// #2
const getTargetCopy2 = function(original, cloned, target) {
  let ans
  const helper = (o, c) => {
    if (o) {
      helper(o.left, c.left)
      if (o === target) {
        ans = c
      }
      helper(o.right, c.right)
    }
  }
  helper(original, cloned)
  return ans
};