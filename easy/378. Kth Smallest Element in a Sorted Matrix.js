// 378. Kth Smallest Element in a Sorted Matrix

// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

 

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2
 

// Follow up:

// Could you solve the problem with a constant memory (i.e., O(1) memory complexity)?
// Could you solve the problem in O(n) time complexity? The solution may be too advanced for an interview but you may find reading this paper fun.


/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

// #1
const kthSmallest = function(matrix, k) {
  return matrix.flat().sort((a, b) => a - b)[k - 1]
}

// #2
const kthSmallest = function(matrix, k) {
  const arr = matrix.flat()

  arr.sort((a, b) => a - b)

  return arr[k - 1]
}

// HEAP

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

class Heap {
  constructor(compare, arr = []) {
    this.arr = arr;
    this.size = arr.length;
    this.compare = compare;

    /* heapify */
    this.heapify();
  }

  heapify () {
    const n = this.size;
    for (let i = (n >> 1) - 1; i >= 0; i--) {
      this.percolateDown(i);
    }
  }

  percolateDown (root, s) {
    const size = s ?? this.size;
    const arr = this.arr;
    let largest = root;
    const left = (root << 1) + 1;
    const right = (root << 1) + 2;

    if (left < size && this.compare(arr[left], arr[largest]))
      largest = left;
    if (right < size && this.compare(arr[right], arr[largest]))
      largest = right;
    if (largest !== root) {
      [arr[largest], arr[root]] = [arr[root], arr[largest]];
      this.percolateDown(largest, size);
    }
  }

  percolateUp (node) {
    const arr = this.arr;
    const parent = (node - 1) >> 1;
    
    if (node > 0 && this.compare(arr[node], arr[parent])) {
      [arr[node], arr[parent]] = [arr[parent], arr[node]];
      this.percolateUp(parent);
    }
  }

  push (val) {
    this.arr[this.size] = val;
    this.percolateUp(this.size);
    this.size++;
  }

  pop () {
    const poppedElement = this.arr[0];
    this.arr[0] = this.arr[this.size - 1];
    this.size--;
    this.percolateDown(0);

    return poppedElement;
  }

  top () {
    return this.arr[0];
  }
}

const kthSmallest1 = function (matrix, k) {
  const n = matrix.length;
  const limit = Math.min(n, k)


  const initialElements = [];
  for(let i = 0; i < limit; i++) {
    initialElements.push([ matrix[i][0], i, 0 ]);
  }

  const heap = new Heap((a, b) => a[0] < b[0], initialElements);

  let ans;
  while(k) {
    const [val, r, c] = heap.pop();
    ans = val;

    if(c < n - 1)
      heap.push([matrix[r][c + 1], r, c + 1]);

    k -= 1;
  }

  return ans;
};

const kthSmallest = function (matrix, k) {
  const n = matrix.length;
  let start = matrix[0][0];
  let end = matrix[n - 1][n - 1];

  function getLessEqual(val) {
    let res = 0;
    let r = n - 1
    let c = 0;

    while (r >= 0 && c < n) {
      if (matrix[r][c] > val) 
        r--;
      else {
        res += r + 1;
        c++;
      }
    }

    return res;
  }

  while(start <= end) {
    const mid = (start + end) >> 1;
    const count = getLessEqual(mid);
    if (count < k) start = mid + 1;
    else end = mid - 1;
  }

  return start;
}