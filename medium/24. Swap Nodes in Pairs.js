// 24. Swap Nodes in Pairs

// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:

// Input: head = []
// Output: []
// Example 3:

// Input: head = [1]
// Output: [1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100


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

// #1
const swapPairs = function(head) {
  let dummy = new ListNode(0, head)
  let temp = dummy

  while (temp.next && temp.next.next) {
    const node1 = temp.next
    const node2 = temp.next.next

    temp.next = node2
    node1.next = node2.next
    node2.next = node1

    temp = node1
  }

  return dummy.next
}

// #2
const swapPairs = function(head) {
  let dummy = new ListNode(0, head)
  let prev = dummy
  let cur = head

  while (cur && cur.next) {
    const next = cur.next
    const temp = cur.next.next

    next.next = cur
    cur.next = temp
    prev.next = next

    prev = cur
    cur = temp
  }

  return dummy.next
}