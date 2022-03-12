// 138. Copy List with Random Pointer

// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

 

// Example 1:


// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:


// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:



// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
 

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.


/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


// #1
const copyRandomList1 = function(head) {
  let map = new Map()
  let cur = head

  while (cur) {
    let node = new Node(cur.val)
    map.set(cur, node)
    cur = cur.next
  }


  cur = head

  while (cur) {
    let node = map.get(cur)
    node.next = map.get(cur.next) || null
    node.random = map.get(cur.random) || null
    cur = cur.next
  }

  return map.get(head)
}

// #2
const copyRandomList2 = function(head) {
  if (head === null) {
    return head
  }

  let cur = head

  while (cur) {
    const nextNode = cur.next
    cur.next = new Node(cur.val, nextNode, null)
    cur = nextNode
  }

  cur = head

  while (cur) {
    const clone = cur.next
    clone.random = cur.random ? cur.random.next : null
    cur = clone.next
  }

  cur = head
  const clone = cur.next

  while (cur) {
    let cln = cur.next
    const ogNext = cln.next
    const cloneNext = ogNext ? ogNext.next : null
    cur.next = ogNext
    cln.next = cloneNext
    cur = cur.next
    cln = cln.next
  }

  return clone
}