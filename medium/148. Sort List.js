// 148. Sort List

// Given the head of a linked list, return the list after sorting it in ascending order.

 

// Example 1:


// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:


// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105
 

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?


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

const sortList = function(head) {
  let dummy = head
  const arr = []

  while (dummy) {
    arr.push(dummy.val)
    dummy = dummy.next
  }

  arr.sort((a, b) => a - b)

  dummy = head
  let i = 0
  
  while (dummy) {
    dummy.val = arr[i]

    dummy = dummy.next
    i++
  }

  return head
}


// #2
var sortList = function(head) {
  if (head == null || head.next == null)
    return head;
  
  let mid = middleNode(head);
  let left = sortList(head);
  let right = sortList(mid);

  return mergeTwoLists(left, right);
};

// when you find the middle node you also set the first half to end at the middle
const middleNode = function(head) {
  let slow = null;
  let fast = head;

  while(fast != null && fast.next != null) {
    slow = (slow === null) ? head : slow.next;
    fast = fast.next.next;
  }

  const mid = slow.next;
  slow.next = null;

  return mid;
};

// solve this again
const mergeTwoLists = function(list1, list2) {
  let head = new ListNode(); // empty node
  let tail = head;

  while(list1 != null && list2 !== null) {
    if(list1.val < list2.val) {
      tail.next = list1;  
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next; // after first iteration head is in the front and tail keeps moving on
  }

  if(list1 != null) {
    tail.next = list1;
  }

  if(list2 != null) {
    tail.next = list2;
  }

  return head.next;
};