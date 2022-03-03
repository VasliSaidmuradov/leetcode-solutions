// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// #1
const addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(null)
  let cur = dummy
  let d1 = l1
  let d2 = l2
  let carry = 0

  while (d1 || d2) {
    const sum = (d1 ? d1.val : 0) + (d2 ? d2.val : 0) + carry
    carry = Math.floor(sum / 10)
    cur.next = new ListNode(sum % 10)
    cur = cur.next

    if (d1) d1 = d1.next
    if (d2) d2 = d2.next
  }

  if (carry) cur.next = new ListNode(1)

  return dummy.next
}

// #2
const addTwoNumbers = function(l1, l2) {
  let cur1 = l1
  let cur2 = l2
  let newTail = new ListNode() 
  let curNew = newTail

  let remain = 0

  while (cur1 && cur2) {
    let sum = cur1.val + cur2.val + remain
    remain = 0

    if (sum >= 10) {
      sum = sum % 10
      remain = 1
    }

    let node = new ListNode(sum)
    curNew.next = node
    curNew = curNew.next

    cur1 = cur1.next
    cur2 = cur2.next
  }

  if (!cur1) {
    while (cur2) {
      let sum = cur2.val + remain
      remain = 0

      if (sum >= 10) {
        sum = sum % 10
        remain = 1
      }

      let node = new ListNode(sum)
      curNew.next = node
      curNew = curNew.next
      cur2 = cur2.next
    }
  }

  if (!cur2) {
    while (cur1) {
      let sum = cur1.val + remain
      remain = 0

      if (sum >= 10) {
        sum = sum % 10
        remain = 1
      }

      let node = new ListNode(sum)
      curNew.next = node
      curNew = curNew.next
      cur1 = cur1.next
    }
  }

  if (remain > 0) {
    let node = new ListNode(remain)
    curNew.next = node
    curNew = node
  }

  return newTail.next
}

// #3
const addTwoNumbers = function(l1, l2) {
  let lo = null, remainder = false, cur

  do {
    let leaf = new ListNode((l1?.val ?? 0) + (l2?.val ?? 0) + +remainder)
    remainder = leaf.val > 9
    if (remainder)
      leaf.val = leaf.val - 10

    if (!lo) lo = leaf
    else cur.next = leaf

    cur = leaf

    l1 = l1?.next
    l2 = l2?.next
  } while(l1 || l2)

  if (remainder)
    cur.next = new ListNode(+remainder)

  return lo
}