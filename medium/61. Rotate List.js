// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


// #1
const rotateRight1 = function(head, k) {
  const arr = []
  let cur = head
  while (cur) {
    arr.push(cur.val)
    cur = cur.next
  }

  k = k % arr.length
  let i = 0
  while (i < k) {
    arr.unshift(arr.pop())
    i++
  }

  i = 0
  const dummy = new ListNode(0, head)
  cur = dummy
  while (i < arr.length) {
    cur.next.val = arr[i]
    cur = cur.next
    i++
  }

  return dummy.next
}

// #2
const rotateRight2 = function(head, k) {   
  //edge cases
  if(head === null || head.next === null || k === 0) return head

  let length = 1
  let cur = head

  //1. get length;
  while(cur.next){
    length++
    cur = cur.next
  }

  //2. make Linked List circular
  cur.next = head

  //3. loop up to kth node
  // k = k % length
  let kthNode = length -  k % length
    while(kthNode-- > 0){
    cur = cur.next
  }

  //4. Make next node the head
  head = cur.next

  //5. We need to make next node null
  cur.next = null

  return head
}