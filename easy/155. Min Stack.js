// 155. Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.

// #1
const MinStack = function() {
  this.stack = []
  this.min = Infinity
}

MinStack.prototype.push = function(val) {
  this.stack.push(val)
  this.min = Math.min(this.min, val)
}

MinStack.prototype.pop = function() {
  if (!this.stack.length) return null

  const removed = this.stack.pop()
  this.min = Math.min(...this.stack)

  return removed
}

MinStack.prototype.top = function() {
  if (!this.stack.length) return null

  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function() {
  return this.min
}

// #2
const MinStack2 = function() {
  this.stack = []
  this.min = []
}

MinStack2.prototype.push = function(val) {
	this.stack.push(val)
	
    if (!this.min.length || val <= this.getMin()) {
      this.min.push(val)
    }
}

MinStack2.prototype.pop = function() {
  if (!this.stack.length) return null

  const removed = this.stack.pop()

  if (removed === this.getMin()) {
    this.min.pop()
  }

  return removed
}

MinStack2.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

MinStack2.prototype.getMin = function() {
  return this.min[this.min.length - 1]
}

// #3
const MinStack3 = function() {
  this.stack = []
};

MinStack3.prototype.push = function(val) {
  if (!this.stack.length) {
    this.stack.push([val, val])
  } else {
    let [num, min] = this.stack[this.stack.length - 1]
    min = Math.min(min, val)

    this.stack.push([val, min])
  }
};

MinStack3.prototype.pop = function() {
  this.stack.pop()
};

MinStack3.prototype.top = function() {
  return this.stack[this.stack.length - 1][0]
};

MinStack3.prototype.getMin = function() {
  return this.stack[this.stack.length - 1][1]
};


// PYTHON 3

// class MinStack:

//     def __init__(self):
//         self.stack = []
//         self.minStack = []

//     def push(self, val: int) -> None:
//         self.stack.append(val)
//         minVal = min(val, self.minStack[-1] if self.minStack else val)
//         self.minStack.append(minVal)

//     def pop(self) -> None:
//         self.stack.pop()
//         self.minStack.pop()

//     def top(self) -> int:
//         return self.stack[-1]

//     def getMin(self) -> int:
//         return self.minStack[-1]