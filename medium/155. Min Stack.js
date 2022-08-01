// 155. Min Stack

// #1
const MinStack = function() {
  this.values = []
  this.mins = []
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.values.push(val)
  const min = this.mins.length ? Math.min(this.mins[this.mins.length - 1], val) : val
  this.mins.push(min)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.values.pop()
  this.mins.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.values[this.values.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length - 1]
};


// #2
const MinStack2 = function() {
  this.values = [] // [value, min]
};

/** 
* @param {number} val
* @return {void}
*/
MinStack2.prototype.push = function(val) {
  if (this.values.length) {
    const [_, currMin] = this.values[this.values.length - 1]
    const newValue = [val, Math.min(currMin, val)]
    this.values.push(newValue)
    return
  }

  this.values.push([val, val])
};

/**
* @return {void}
*/
MinStack2.prototype.pop = function() {
  this.values.pop()
};

/**
* @return {number}
*/
MinStack2.prototype.top = function() {
  return this.values[this.values.length - 1][0]
};

/**
* @return {number}
*/
MinStack2.prototype.getMin = function() {
  return this.values[this.values.length - 1][1]
};