// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

 

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
 

// Constraints:

// k == lists.length
// 0 <= k <= 104
// 0 <= lists[i].length <= 500
// -104 <= lists[i][j] <= 104
// lists[i] is sorted in ascending order.
// The sum of lists[i].length will not exceed 104.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// #1
const mergeKLists1 = function(lists) {
  const arr = []
  const dummy = new ListNode(-1)
  let cur = dummy

  for (let list of lists) {
    while (list) {
      arr.push(list.val)
      list = list.next
    }
  }

  arr.sort((a, b) => a - b)

  for (let item of arr) {
    let list = new ListNode(item)
    cur.next = list
    cur = cur.next
  }

  return dummy.next
}

// #2
const mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(-1)
  let cur = dummy

  while (list1 && list2) {
  if(list1.val > list2.val) {
  cur.next = list2
  list2 = list2.next
  } else {
  cur.next = list1;
  list1 = list1.next
  }

  cur = cur.next
  }

  cur.next = list1 || list2

  return dummy.next
}

const mergeKLists2 = function(lists) {
  if (!lists.length) return new ListNode(null).next

  const helper = lists => {
    if (lists.length === 1) return lists[0]
    const mid = Math.floor(lists.length / 2)
    const left = mergeKLists(lists.slice(0, mid))
    const right = mergeKLists(lists.slice(mid))
    return mergeTwoLists(left, right)
  }

  return helper(lists)
}

const mergeKLists3 = function(lists) {
  if (!lists.length) return new ListNode(null).next
  else {
    if (lists.length === 1) return lists[0]
    const mid = Math.floor(lists.length / 2)
    const left = mergeKLists(lists.slice(0, mid))
    const right = mergeKLists(lists.slice(mid))
    return mergeTwoLists(left, right)
  }
}