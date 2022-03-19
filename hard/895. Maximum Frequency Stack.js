// 895. Maximum Frequency Stack

// Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

// Implement the FreqStack class:

// FreqStack() constructs an empty frequency stack.
// void push(int val) pushes an integer val onto the top of the stack.
// int pop() removes and returns the most frequent element in the stack.
// If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
 

// Example 1:

// Input
// ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
// [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
// Output
// [null, null, null, null, null, null, null, 5, 7, 5, 4]

// Explanation
// FreqStack freqStack = new FreqStack();
// freqStack.push(5); // The stack is [5]
// freqStack.push(7); // The stack is [5,7]
// freqStack.push(5); // The stack is [5,7,5]
// freqStack.push(7); // The stack is [5,7,5,7]
// freqStack.push(4); // The stack is [5,7,5,7,4]
// freqStack.push(5); // The stack is [5,7,5,7,4,5]
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
// freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
// freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
// freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
 

// Constraints:

// 0 <= val <= 109
// At most 2 * 104 calls will be made to push and pop.
// It is guaranteed that there will be at least one element in the stack before calling pop.


// #1
const FreqStack = function() {
  this.freq = new Map()
  this.group = new Map()
  this.maxFreq = 0
}

FreqStack.prototype.push = function(val) {
  const f = (this.freq.get(val) || 0) + 1
  this.freq.set(val, f)
  this.maxFreq = Math.max(this.maxFreq, f)

  const v = this.group.get(f) || []
  this.group.set(f, [...v, val])
}

FreqStack.prototype.pop = function() {
  const x = this.group.get(this.maxFreq).pop()
  const v = this.freq.get(x)
  this.freq.set(x, v - 1)

  if (!this.group.get(this.maxFreq).length)
    this.maxFreq -= 1

  return x
}

// #2
const FreqStack2 = function() {
  this.freqMap = new Map()
  this.arrOfStacks = []
}

/** 
* @param {number} val
* @return {void}
*/
FreqStack2.prototype.push = function(val) {
  const valFreq = (this.freqMap.get(val) || 0) + 1
  this.freqMap.set(val, valFreq)

  if (!this.arrOfStacks[valFreq]) this.arrOfStacks[valFreq] = [val]
  else this.arrOfStacks[valFreq].push(val)
}

/**
* @return {number}
*/
FreqStack2.prototype.pop = function() {
  const topStack = this.arrOfStacks[this.arrOfStacks.length - 1]
  const top = topStack.pop()
  
  if (!topStack.length) this.arrOfStacks.pop()
  
  this.freqMap.set(top, this.freqMap.get(top) - 1)
  
  return top
}