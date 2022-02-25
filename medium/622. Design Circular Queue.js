// 622. Design Circular Queue

// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implementation the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
// You must solve the problem without using the built-in queue data structure in your programming language. 

 

// Example 1:

// Input
// ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 3, true, true, true, 4]

// Explanation
// MyCircularQueue myCircularQueue = new MyCircularQueue(3);
// myCircularQueue.enQueue(1); // return True
// myCircularQueue.enQueue(2); // return True
// myCircularQueue.enQueue(3); // return True
// myCircularQueue.enQueue(4); // return False
// myCircularQueue.Rear();     // return 3
// myCircularQueue.isFull();   // return True
// myCircularQueue.deQueue();  // return True
// myCircularQueue.enQueue(4); // return True
// myCircularQueue.Rear();     // return 4
 

// Constraints:

// 1 <= k <= 1000
// 0 <= value <= 1000
// At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.

// #1
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const MyCircularQueue = function(k) {
  this.head = null
  this.tail = null
  this.length = 0
  this.limit = k
};

MyCircularQueue.prototype.enQueue = function(value) {
  const newNode = new Node(value)

  if (!this.length) {
    this.head = newNode
    this.tail = newNode
  } else {
    if (this.length >= this.limit) return false

    this.tail.next = newNode
    this.tail = newNode
  }

  this.length++
  return true 
};

MyCircularQueue.prototype.deQueue = function() {
  if (!this.length) return false

  if (this.head === this.tail) {
    this.tail = null
  }
  this.head = this.head.next

  this.length--
  return true
};

MyCircularQueue.prototype.Front = function() {
  return this.head ? this.head.val : -1
};

MyCircularQueue.prototype.Rear = function() {
  return this.tail ? this.tail.val : -1
};

MyCircularQueue.prototype.isEmpty = function() {
  return !this.length
};

MyCircularQueue.prototype.isFull = function() {
  return this.length === this.limit
};


// #2
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const MyCircularQueue = function(k) {
  this.head = null
  this.tail = null
  this.length = 0
  this.limit = k
};

MyCircularQueue.prototype.enQueue = function(value) {
  const newNode = new Node(value)

  if (this.isEmpty()) {
    this.head = newNode
    this.tail = newNode
  } else {
    if (this.isFull()) return false

    this.tail.next = newNode
    this.tail = newNode
  }

  this.length++
  return true
};

MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false

  if (this.head === this.tail) {
    this.tail = null
  }
  this.head = this.head.next

  this.length--
  return true
};

MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.head.val
};

MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.tail.val
};

MyCircularQueue.prototype.isEmpty = function() {
  return !this.length
};

MyCircularQueue.prototype.isFull = function() {
  return this.length === this.limit
};