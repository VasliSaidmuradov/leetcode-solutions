# Add Two Numbers

# 1
class Solution:
  def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    carry = 0
    dummy = ListNode(-1)
    curr = dummy
    while l1 or l2:
      n1 = l1.val if l1 else 0
      n2 = l2.val if l2 else 0
      add = n1 + n2 + carry
      num = add % 10
      total = num
      carry = 1 if add > 9 else 0

      curr.next = ListNode(total, None)
      curr = curr.next

      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    if carry:
      curr.next = ListNode(1)
    return dummy.next


# 2
class Solution:
  def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    carry = 0
    dummy = ListNode(-1)
    curr = dummy
    while l1 or l2:
      n1 = l1.val if l1 else 0
      n2 = l2.val if l2 else 0
      add = n1 + n2 + carry
      total = add % 10
      carry = add // 10

      curr.next = ListNode(total)
      curr = curr.next

      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    if carry:
      curr.next = ListNode(1)
    return dummy.next


# 3
class Solution:
  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode()
    cur = dummy

    carry = 0
    while l1 or l2 or carry:
      v1 = l1.val if l1 else 0
      v2 = l2.val if l2 else 0

      # new digit
      val = v1 + v2 + carry
      carry = val // 10
      val = val % 10
      cur.next = ListNode(val)

      # update ptrs
      cur = cur.next
      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    return dummy.next