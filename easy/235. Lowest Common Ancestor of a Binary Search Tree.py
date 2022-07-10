# 235. Lowest Common Ancestor of a Binary Search Tree

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# 1
class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    while root is not None:
      if root.val < p.val and root.val < q.val:
        root = root.right
      elif root.val > p.val and root.val > q.val:
        root = root.left
      else:
        return root

# 2
class Solution:
  def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if root.val < p.val and root.val < q.val:
      return self.lowestCommonAncestor(root.right, p, q)
    if root.val > p.val and root.val > q.val:
      return self.lowestCommonAncestor(root.left, p, q)
    return root