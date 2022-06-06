# 160. Intersection of Two Linked Lists

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# 1
class Solution:
  def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
    a, b = headA, headB
    while a is not b:
      a = a.next if a else headB
      b = b.next if b else headA
    return a

# 2
class Solution:
  def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
    curA = headA
    curB = headB

    while curA != curB:
      if curA is None:
        curA = headB
      else:
        curA = curA.next

    if curB is None:
      curB = headA
    else:
      curB = curB.next
    
    return curA