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

  min() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
  }

  bubbleUp(idx) {
    while (idx > 0) {
      let parentIdx = Math.floor((idx + 1) / 2) - 1;
      if (this.heap[parentIdx] > this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      };
      idx = parentIdx;
    }
  }

  bubbleDown(idx) {
    while (true) {
      let right = (idx + 1) * 2;
      let left = right - 1;
      let swapIdx;

      if (this.heap[idx] > this.heap[right]) {
        swapIdx = right;
      }

      if (this.heap[right] === null) {
        if (this.heap[left] !== null) {
          swapIdx = left;
        }
      }

      if (this.heap[idx] > this.heap[left] && (this.heap[right] === null || (this.heap[right] !== null && this.heap[left] < this.heap[right]))) {
        swapIdx = left;
      }

      if (swapIdx === null) break;

      [this.heap[swapIdx], this.heap[idx]] = [this.heap[idx], this.heap[swapIdx]];

      idx = swapIdx;
    }
  }


  isEmpty() {
    return this.heap.length > 0;
  }

}


const mergeKSortedArrays = (arrays) => {
  let output = [];
  let minHeap = new MinHeap();
  for (let i = 0; i < arrays.length; i++) {
    let n = 0;
    while (n < arrays.length) {
      minHeap.insert(arrays[i][n]);
      n++;
    };
    n = 0;
  };

  console.log("minHEAP: ", minHeap);
  while (!minHeap.isEmpty()) {
    let minVal = minHeap.min();
    output.push(minVal);
  }

  return output;
}

let arrs = arr = [
  [2, 6, 12, 34],
  [1, 9, 20, 1000],
  [23, 34, 90, 2000]
];
console.log(mergeKSortedArrays(arrs));