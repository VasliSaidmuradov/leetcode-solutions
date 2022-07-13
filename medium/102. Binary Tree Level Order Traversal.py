# 102. Binary Tree Level Order Traversal

# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Example 1:

# Input: root = [3,9,20,null,null,15,7]
# Output: [[3],[9,20],[15,7]]
# Example 2:

# Input: root = [1]
# Output: [[1]]
# Example 3:

# Input: root = []
# Output: []

# Constraints:

# The number of nodes in the tree is in the range [0, 2000].
# -1000 <= Node.val <= 1000

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# 1
class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []

    def dfs(root, level):
      if root is None:
        return

      if len(res) == level:
        res.append([])
      res[level].append(root.val)

      dfs(root.left, level + 1)
      dfs(root.right, level + 1)

    dfs(root, 0)

    return res

# 2
class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    res = []
    Q = deque([root])

    while Q:
      length = len(Q)
      temp = []
      for _ in range(length):
        node = Q.popleft()
        if node:
          if node.left: Q.append(node.left)
          if node.right: Q.append(node.right)
          temp.append(node.val)
      if temp:
        res.append(temp)

    return res


# 3
class Solution:
  def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
    if root is None:
      return []
    res = []
    Q = deque([root])

    while len(Q):
      length = len(Q)
      temp = []
      for i in range(length):
        node = Q.popleft()
        if node.left: Q.append(node.left)
        if node.right: Q.append(node.right)
        temp.append(node.val)
      res.append(temp)

    return res