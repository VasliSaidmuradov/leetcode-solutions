// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]
 

// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Solutions:

// #1
const deleteDuplicates = function(head) {
  let cur = head

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }

  return head
}

// #2
const deleteDuplicates = function(head) {
  if (!head) return head
  let dummy = { next: head }
  let current = head
  let previous = dummy

  while(current !== null & current.next !== null) {
    if (current.next.val === current.val) {
      previous.next = current.next
    } else {
      previous = current
    }
    
    current = current.next
  }
  
  return dummy.next
}

// #3
function deleteDuplicates(head) {
  let current = head

  while (current) {
    while (current.next && current.val === current.next.val) {
      current.next = current.next.next
    }
    
    current = current.next
  }
  
  return head
}
