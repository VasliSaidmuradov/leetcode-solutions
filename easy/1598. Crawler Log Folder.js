// 1598. Crawler Log Folder

// The Leetcode file system keeps a log each time some user performs a change folder operation.

// The operations are described below:

// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

// The file system starts in the main folder, then the operations in logs are performed.

// Return the minimum number of operations needed to go back to the main folder after the change folder operations.

 

// Example 1:



// Input: logs = ["d1/","d2/","../","d21/","./"]
// Output: 2
// Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
// Example 2:



// Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
// Output: 3
// Example 3:

// Input: logs = ["d1/","../","../","../"]
// Output: 0
 

// Constraints:

// 1 <= logs.length <= 103
// 2 <= logs[i].length <= 10
// logs[i] contains lowercase English letters, digits, '.', and '/'.
// logs[i] follows the format described in the statement.
// Folder names consist of lowercase English letters and digits.


/**
 * @param {string[]} logs
 * @return {number}
 */

// #1 - stack with array
const minOperations = function(logs) {
  const TO_TOP = '../'
  const STAY = './'

  const stack = []

  for (let log of logs) {
    if (log === TO_TOP) {
      stack.pop()
    }

    if (log !== STAY && log !== TO_TOP) {
      stack.push(log)
    }
  }

  return stack.length
}

// #2 - stack with Linked List
const minOperations = function(logs) {
  const TO_TOP = '../'
  const STAY = './'

  const stack = new Stack()

  for (let log of logs) {
    if (log === TO_TOP) {
      stack.pop()
    }
    if (log !== STAY && log !== TO_TOP) {
      stack.push(log)
    }
  }

  return stack.size
}

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor () {
    this.first = null
    this.last = null
    this.size = 0
  }

  push (val) {
    const newNode = new Node(val)

    if (!this.size) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }

    return ++this.size
  }

  pop () {
    if (!this.size) return null

    const removed = this.first

    if (this.size === 1) {
      this.last = null
    }

    this.first = this.first.next
    this.size--

    return removed.val
  }
}

// #3
const minOperations = function(logs) {
  let depth = 0

  for (let log of logs) {
    if (log === '../' && depth) depth--
    if (log !== './' && log !== '../') depth++
  }

  return depth
}