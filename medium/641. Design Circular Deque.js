// 641. Design Circular Deque

// Design your implementation of the circular double-ended queue (deque).

// Implement the MyCircularDeque class:

// MyCircularDeque(int k) Initializes the deque with a maximum size of k.
// boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
// boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
// boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
// boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
// int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
// int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
// boolean isEmpty() Returns true if the deque is empty, or false otherwise.
// boolean isFull() Returns true if the deque is full, or false otherwise.
 

// Example 1:

// Input
// ["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// Output
// [null, true, true, true, false, 2, true, true, true, 4]

// Explanation
// MyCircularDeque myCircularDeque = new MyCircularDeque(3);
// myCircularDeque.insertLast(1);  // return True
// myCircularDeque.insertLast(2);  // return True
// myCircularDeque.insertFront(3); // return True
// myCircularDeque.insertFront(4); // return False, the queue is full.
// myCircularDeque.getRear();      // return 2
// myCircularDeque.isFull();       // return True
// myCircularDeque.deleteLast();   // return True
// myCircularDeque.insertFront(4); // return True
// myCircularDeque.getFront();     // return 4
 

// Constraints:

// 1 <= k <= 1000
// 0 <= value <= 1000
// At most 2000 calls will be made to insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull.

// #1
class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

var MyCircularDeque = function(k) {
  this.head = null
  this.tail = null
  this.length = 0
  this.limit = k
};

MyCircularDeque.prototype.insertFront = function(value) {
  if (this.isFull()) return false

  const newNode = new Node(value)

  if (this.isEmpty()) {
    this.head = newNode
    this.tail = newNode
  }	else {
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
  }

  this.length++
  return true
};

MyCircularDeque.prototype.insertLast = function(value) {
  if (this.isFull()) return false

  const newNode = new Node(value)

  if (this.isEmpty()) {
    this.head = newNode
    this.tail = newNode
  }	else {
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }

  this.length++
  return true
};

MyCircularDeque.prototype.deleteFront = function() {
  if (this.isEmpty()) return false

  if (this.length === 1) {
    this.tail = null
  }
  this.head = this.head.next

  this.length--
  return true
};

MyCircularDeque.prototype.deleteLast = function() {
  if (this.isEmpty()) return false

  if (this.length === 1) {
    this.head = null
  }
  this.tail = this.tail.prev

  this.length--
  return true
};

MyCircularDeque.prototype.getFront = function() {
  return this.isEmpty() ? -1 : this.head.val
};

MyCircularDeque.prototype.getRear = function() {
  return this.isEmpty() ? -1 : this.tail.val
};

MyCircularDeque.prototype.isEmpty = function() {
  return !this.length
};

MyCircularDeque.prototype.isFull = function() {
  return this.length === this.limit
};

// #2
var MyCircularDeque = function(k) {
  this.queue = new Array();
  this.length = k;
};

MyCircularDeque.prototype.insertFront = function(value) {
  if(this.queue.length < this.length) {
    this.queue.unshift(value);
    return true;
  }
  return false;
};

MyCircularDeque.prototype.insertLast = function(value) {
  if(this.queue.length < this.length) {
    this.queue.push(value);
    return true;
  }
  return false;
};

MyCircularDeque.prototype.deleteFront = function() {
  if(this.queue.length > 0) {
    this.queue.shift();
    return true;
  }
  return false;
};

MyCircularDeque.prototype.deleteLast = function() {
  if(this.queue.length > 0) {
    this.queue.pop();
    return true;
  }
  return false;
};

MyCircularDeque.prototype.getFront = function() {
  if(this.queue.length > 0) {        
    return this.queue[0];
  }
  return -1;
};

MyCircularDeque.prototype.getRear = function() {
  if(this.queue.length > 0) {        
    return this.queue[this.queue.length-1];
  }
  return -1;
};

MyCircularDeque.prototype.isEmpty = function() {
  if(this.queue.length === 0) {        
    return true;
  }
  return false;
};

MyCircularDeque.prototype.isFull = function() {
  if(this.queue.length === this.length) {        
    return true;
  }
  return false;
};