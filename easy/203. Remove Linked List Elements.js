// 203. Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 104].
// 1 <= Node.val <= 50
// 0 <= val <= 50


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


// #1
const removeElements = function(head, val) {
  if (head === null) return head

  let dummy = new ListNode(0, head)
  let [prev, cur] = [dummy, dummy.next]

  while (cur) {
    let next = cur.next

    if (cur.val === val) {
      prev.next = cur.next
    } else {
      prev = cur
    }

    cur = next
  }

  return dummy.next
}


// #2

const removeElements = function(head, val) {
  if (head === null) return head

  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy

  while (cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next
    }
  }

  return dummy.next
}