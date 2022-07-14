# 1
class Solution:
  def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    preorderIdx = 0
    inorderIdxMap = {}

    for idx, val in enumerate(inorder):
      inorderIdxMap[val] = idx

    def arrayToTree(left, right):
      nonlocal preorderIdx
      if left > right:
        return None

      rootVal = preorder[preorderIdx]
      root = TreeNode(rootVal)

      preorderIdx += 1

      root.left = arrayToTree(left, inorderIdxMap[rootVal] - 1)
      root.right = arrayToTree(inorderIdxMap[rootVal] + 1, right)

      return root

    return arrayToTree(0, len(preorder) - 1)

# 2
class Solution:
  preorder = []
  preorderIndex = 0
  inorderMap = {}

  def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    self.mapInorder(inorder)
    self.preorder = preorder
    return self.recursiveTree(0, len(inorder))

  def recursiveTree(self, inorderStart, inorderEnd):
    if(inorderEnd <= inorderStart):
      return None
    rootVal = self.preorder[self.preorderIndex]
    root = TreeNode(rootVal)
    rootIndex = self.inorderMap[rootVal]
    self.preorderIndex += 1
    
    if(inorderEnd - inorderStart == 1 ):
      return root
    root.left = self.recursiveTree(inorderStart, rootIndex)
    root.right = self.recursiveTree(rootIndex+1, inorderEnd)
    
    return root
    
  def mapInorder(self, inorder):
    for i in range(len(inorder)):
      self.inorderMap[inorder[i]] = i 