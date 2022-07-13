// 102. Binary Tree Level Order Traversal

const levelOrder = function(root) {
  const res = []

  const helper = (tree, level) => {
    if (!tree) return
    if (res.length === level) res.push([])
    res[level].push(tree.val)
    helper(tree.left, level + 1)
    helper(tree.right,  level + 1)
  }

  helper(root, 0)

  return res
};

const levelOrder2 = function(root) {
  const res = []
  const Q = [root]

  while (Q.length) {
    const len = Q.length
    const temp = []

    for (let i = 0; i < len; i++) {
      const node = Q.shift()
      if (node) {
        temp.push(node.val)
        if (node.left) Q.push(node.left)
        if (node.right) Q.push(node.right)
      }
    }

    if (temp.length) res.push(temp)
  }

  return res
};