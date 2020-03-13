/**
 * n*k * Log(n*k) time-complexity because of sort.
 * @param {Array[Array]} arrays 
 */

const kSortedArrays = (arrays) => {
  let output = [];
  for (let arr of arrays) {
    output.push(arr);
  };
  return output.sort((a, b) => (a - b));
};



/**
 * Min-Heap solution, nk*Log(k) time-complexity
 * @param {Array[Array]} arrays
 * 
 *      5
 *     / \
 *    8  10
 *   /     \ 
 * 12      13     
 *  INVALID HEAP
 *        5
 *       / \
 *      8   10
 *     / \    
 *   12   13
 *   VALID MIN-HEAP
 * 
 */

class HeapNode {
  /**
   * Heap Node class
   */
  constructor(val, arrIdx) {
    this.val = val;
    this.arrIdx = arrIdx;
  }
}


class MinHeap {
  /**
   * Min-Heap Class
   */
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  peek() {
    return this.heap[0];
  }

  getMin() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
  }

  bubbleUp(idx) {
    while (idx > 0) {
      let parentIdx = this.getParent(idx);
      if (this.heap[parentIdx] > this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      };
      idx = parentIdx;
      this.bubbleUp(idx);
    }
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChild(idx) {
    return idx * 2 + 1;
  }

  getRightChild(idx) {
    return idx * 2 + 2;
  }

  hasLeftChild(idx) {
    return this.getLeftChild(idx) < this.heap.length;
  }

  hasRightChild(idx) {
    return this.getRightChild(idx) < this.heap.length;
  }

  bubbleDown(idx) {
    while (this.hasLeftChild(idx)) {
      let left = this.getLeftChild(idx);
      let right = this.getRightChild(idx);
      let swapIdx;

      if (this.hasRightChild(idx) && (this.heap[right] < this.heap[left])) {
        swapIdx = right;
      }

      if (this.heap[idx] < this.heap[swapIdx]) break;
      [this.heap[swapIdx], this.heap[idx]] = [this.heap[idx], this.heap[swapIdx]];

      idx = swapIdx;
    }
  }


  isEmpty() {
    return this.heap.length > 0;
  }

}


// const mergeKSortedArrays = (arrays) => {
//   let output = [];
//   let minHeap = new MinHeap();
//   for (let i = 0; i < arrays.length; i++) {
//     let n = 0;
//     while (n < arrays[i].length) {
//       minHeap.insert(arrays[i][n]);
//       console.log(`minHeap${i}${n}: ${minHeap.heap}`)
//       n++;
//     };
//     n = 0;
//   };

//   console.log("minHEAP: ", minHeap);
//   while (!minHeap.isEmpty()) {
//     let minVal = minHeap.min();
//     output.push(minVal);
//   }

//   return output;
// }

// let arrs = [
//   [2, 6, 12, 34],
//   [1, 9, 20, 1000],
//   [23, 34, 90, 2000]
// ];

// console.log(mergeKSortedArrays(arrs));



/***
 * 
 * Priority Queue implementation
 * https://stackoverflow.com/questions/42919469/efficient-way-to-implement-priority-queue-in-javascript/42919752
 * 
 */

class QueueNode {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  };
}

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this._comparator = comparator
  }

  size() {
    return this.heap.length;
  };

  isEmpty() {
    return this.size() === 0;
  };

  peek() {
    return this.heap[0];
  };

  getParent(idx) {
    return Math.floor(idx / 2)
  }

  getLeftChild(idx) {
    return idx * 2 + 1;
  }

  getRightChild(idx) {
    return idx * 2 + 2;
  }
  hasLeftChild(idx) {
    return this.getLeftChild(idx) < this.heap.length;
  }

  hasRightChild(idx) {
    return this.getRightChild(idx) < this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    this.siftUp();
    return this.size();
  }

  pop() {
    let top = 0;
    let poppedVal = this.peek();
    let bottom = this.size() - 1;
    if (bottom > top) this.swap(top, bottom);
    this.heap.pop();
    this.siftDown();
    return poppedVal;
  }


  replace(val) {
    let replacedVal = this.peek();
    this.heap[0] = val;
    this.siftDown();
  }

  greater(i, j) {
    return this._comparator(this.heap[i], this.heap[j]);
  };

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  };

  siftUp() {
    let nodeIdx = this.size() - 1;
    let parentIdx = this.getParent(nodeIdx)
    while (nodeIdx > 0 && this.greater(nodeIdx, parentIdx)) {
      this.swap(nodeIdx, parentIdx);
      nodeIdx = parentIdx;
    };
  };


  siftDown() {
    let nodeIdx = 0;
    let leftIdx = this.getLeftChild(nodeIdx);
    let rightIdx = this.getRightChild(nodeIdx);
    while (
      (leftIdx < this.heap.length && this.greater(leftIdx, nodeIdx)) || 
      (rightIdx < this.heap.length && this.greater(rightIdx, nodeIdx))
    ) {
      let maxChildIdx = ( rightIdx < this.heap.length && this.greater(rightIdx, leftIdx) ) ? rightIdx : leftIdx;
      this.swap(nodeIdx, maxChildIdx);
      nodeIdx = maxChildIdx;
    }
  }
}

let arrs = [
  [2, 6, 12, 34],
  [1, 9, 20, 1000],
  [23, 34, 90, 2000]
];

const mergeKSortedArrays = (arrays) => {
  let output = [];
  let queue = new PriorityQueue();
  for (let i = 0; i < arrays.length; i++) {
    let n = 0;
    while (n < arrays[i].length) {
      queue.push(arrays[i][n]);
      console.log(queue);
      n++;
    };
    n = 0;
  };

  while (!queue.isEmpty()) {
    let minVal = queue.pop();
    output.push(minVal);
  }

  return output;
}

let h = (mergeKSortedArrays(arrs));
console.log(h);