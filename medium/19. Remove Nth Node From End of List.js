// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// #1
const removeNthFromEnd = function(head, n) {
  let fast = head, slow = head

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
}

// #2
const removeNthFromEnd = (head, n) => {
  let fast = head, slow = head

  while(n--){
    fast = fast.next
  }

  if (!fast) return head.next

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
}

// #3
const removeNthFromEnd = function(head, n) {
  let p1, p2
  let dummy = new ListNode(-1, null)
  dummy.next = head

  p1 = dummy
  p2 = dummy

  for (let i = 0; i < n + 1; i++) {
    p1 = p1.next
  }

  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }

  p2.next = p2.next.next

  return dummy.next
}
