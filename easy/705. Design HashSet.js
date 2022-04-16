// 705. Design HashSet

// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]

// Explanation
// MyHashSet myHashSet = new MyHashSet();
// myHashSet.add(1);      // set = [1]
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(1); // return True
// myHashSet.contains(3); // return False, (not found)
// myHashSet.add(2);      // set = [1, 2]
// myHashSet.contains(2); // return True
// myHashSet.remove(2);   // set = [1]
// myHashSet.contains(2); // return False, (already removed)
 

// Constraints:

// 0 <= key <= 106
// At most 104 calls will be made to add, remove, and contains.



// #1
const MyHashSet = function() {
  this.mySet = []
}
 MyHashSet.prototype.add = function(key) {
  for (let item of this.mySet) {
    if (key === item) return null
  }

  this.mySet.push(key)

  return this
}
MyHashSet.prototype.remove = function(key) {
  for (let i = 0; i < this.mySet.length; i++) {
    if (key === this.mySet[i]) {
      this.mySet.splice(i, 1)
      break
    }
  }

  return this
}
MyHashSet.prototype.contains = function(key) {
  for (let item of this.mySet) {
    if (key === item) return true
  }

  return false
}

// #2
const MyHashSet2 = function() {
  this.t = new Set();
}
MyHashSet2.prototype.add = function(key) {
  return this.t.add(key)
}
MyHashSet2.prototype.remove = function(key) {
  this.t.delete(key)
}
MyHashSet2.prototype.contains = function(key) {
  return this.t.has(key)  
}

// #3
const MyHashSet3 = function() {
  this.set = {}
}
MyHashSet3.prototype.add = function(key) {
  this.set[key] = true
}
MyHashSet3.prototype.remove = function(key) {
  delete this.set[key]
}
MyHashSet3.prototype.contains = function(key) {
  return this.set.hasOwnProperty(key) 
}