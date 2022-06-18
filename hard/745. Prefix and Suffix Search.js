// 745. Prefix and Suffix Search


// #1
/**
 * @param {string[]} words
 */
const WordFilter = function(words) {
  this.words = words
  this.hashMap = new Map()
};

/** 
* @param {string} prefix 
* @param {string} suffix
* @return {number}
*/
WordFilter.prototype.f = function(prefix, suffix) {
  let res = ''
  let idx = -1

  const propName = `${prefix}-${suffix}`
  if (this.hashMap.has(propName)) {
    return this.hashMap.get(propName)
  }

  this.hashMap.set(propName, -1)

  for (let i = 0; i < this.words.length; i++) {
    const curr = this.words[i]
    if (curr.startsWith(prefix) && curr.endsWith(suffix)) {
      this.hashMap.set(propName, i)
    }
  }

  return this.hashMap.get(propName)
};

/** 
* Your WordFilter object will be instantiated and called as such:
* var obj = new WordFilter(words)
* var param_1 = obj.f(prefix,suffix)
*/

 // #2
class Node {
  constructor() {
    this.indices = new Set();
    this.children = new Map();
  }
  static insert(node, word, index) {
    node.indices.add(index);
    for (const char of word) {
      if (!node.children.has(char)) node.children.set(char, new Node());
      node = node.children.get(char);
      node.indices.add(index);
    }
  }
  static lookup(node, prefix) {
    for (const char of prefix) {
      node = node.children.get(char);
      if (!node)
      //if our path is 'broken', we return an empty Set
        return new Set();
    }
    return node.indices;
  }
}

class WordFilter2 {
  constructor(arr) {
    this.startTree = new Node();
    this.endTree = new Node();

    //we insert strings in a reverse order, as mentioned in my explanation
    for (let i = arr.length - 1; i >= 0; i--) {
      Node.insert(this.startTree, arr[i], i);
      Node.insert(this.endTree, reverse(arr[i]), i);
    }
  }

  f(prefix, postfix) {
    const s1 = Node.lookup(this.startTree, prefix);

    //early return if the first search didn't match
    if (!s1.size) return -1;

    const s2 = Node.lookup(this.endTree, reverse(postfix));

    //we iterate through the result set
    for (const elem of s1) {
      //if the second set also includes this value, we return it
      if (s2.has(elem)) return elem;
    }
    //if we found no matches, return -1
    return -1;
  }
}

//reverse function for strings
const reverse = (s) => s.split('').reverse().join('');