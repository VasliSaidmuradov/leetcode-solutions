# 108. Convert Sorted Array to Binary Search Tree

# 1
class Solution:
  def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
    def helper(l, r):
      if l > r:
        return None

      mid = (l + r) // 2
      tree = TreeNode(nums[mid])

      tree.left = helper(l, mid-1)
      tree.right = helper(mid+1, r)

      return tree

    return helper(0, len(nums)-1)