// 1721. Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 105
// 0 <= Node.val <= 100

// #1
const swapNodes = function(head, k) {
  let slow = head
  let fast = head
  let cur = head
  let i = 1
  let swap1

  while (cur) {
    if (i === k) swap1 = cur
    cur = cur.next
    i++
  }

  let curNode = 1
  let swap2 = head

  while ((i - k) > curNode) {
    curNode++
    swap2 = swap2.next
  }

  let temp = swap1.val
  swap1.val = swap2.val
  swap2.val = temp

  return head
}

// #2
const swapNodes2 = function(head, k) {
  const arr = []
  let linkedList = new ListNode(-1)
  let cur = linkedList

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let temp = arr[k - 1]
  arr[k - 1] = arr[arr.length - k]
  arr[arr.length - k] = temp

  for (let item of arr) {
    cur.next = new ListNode(item)
    cur = cur.next
  }

  return linkedList.next
}

// #3
const swapNodes = function(head, k) {
  let count = 0
  let cur = head

  while(cur){
    count++
    cur = cur.next
  }

  let start = k - 1
  let end = count - k

  cur = head

  let startNode = null
  let endNode = null

  if (start == end) return head

  count = 0

  while(cur) {
    if(count == start){
      startNode = cur
    }

    if(count == end){
      endNode = cur
    }

    count++
    cur = cur.next
  }

  let tempVal = startNode.val
  startNode.val = endNode.val
  endNode.val = tempVal

  return head
}
