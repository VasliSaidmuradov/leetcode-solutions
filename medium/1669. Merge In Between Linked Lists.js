// 1669. Merge In Between Linked Lists

// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure indicate the result:


// Build the result list and return its head.

 

// Example 1:


// Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [0,1,2,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
// Example 2:


// Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
// Explanation: The blue edges and nodes in the above figure indicate the result.
 

// Constraints:

// 3 <= list1.length <= 104
// 1 <= a <= b < list1.length - 1
// 1 <= list2.length <= 104


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

// #1
const mergeInBetween = function(list1, a, b, list2) {
  let dummy = new ListNode(0, list1)
  let [prev, cur] = [dummy, dummy.next]

  let i = 0
  let end = new ListNode()

  while (cur) {
    if (i === a) {
      prev.next = list2
    }

    if (i === b) {
      end = cur.next
      break
    }

    i++
    prev = cur
    cur = cur.next
  }

  let temp = dummy

  while (temp.next) {
    temp = temp.next
  }

  temp.next = end

  return dummy.next
}


// #2
const mergeInBetween = function(list1, a, b, list2) {
  let firstCut, secondCut
  let current = list1
  let idx = 0

  while (current){
    if (idx == a - 1) {
      firstCut = current
    }

    if (idx == b) {
      secondCut = current.next
      break
    }

    current = current.next
    idx++
  }

  firstCut.next = list2
  current = firstCut

  while (current.next) {
    current = current.next
  }

  current.next = secondCut

  return list1
}