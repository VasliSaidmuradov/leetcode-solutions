# 141. Linked List Cycle

# 1
class Solution:
  def hasCycle(self, head: Optional[ListNode]) -> bool:
    curr = head
    hashSet = set()

    while curr:
      if curr in hashSet:
        return True
      hashSet.add(curr)
      curr = curr.next

    return False

# 2
class Solution:
  def hasCycle(self, head: Optional[ListNode]) -> bool:
    slow, fast = head, head
    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
      if slow == fast:
        return True
      
    return False