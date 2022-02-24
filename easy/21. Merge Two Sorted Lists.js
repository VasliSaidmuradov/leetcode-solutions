// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


// Solutions: 

// #1
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
const mergeTwoLists = function(l1, l2) {
  if (l1 == null)
		return l2;
  if (l2 == null)
		return l1;

  if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
  } else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
  }
}

// #2
const mergeTwoLists = function(list1, list2) {
	const dummy = { val : -1, next : null }
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