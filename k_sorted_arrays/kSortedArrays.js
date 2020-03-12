/**
 * n * Log(n) time-complexity because of sort.
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
 * Min-Heap solution, Linear (N) time-complexity
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
  constructor(val, ArrIdx) {
    this.val = val;
    this.idx = idx;
  }
}


class MinHeap {
  constructor(arr) {
    this.heap = [null]
    this.size = this.heap.length;
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1)
  }

  bubbleUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);
    // let curr = this.heap[idx];
    if (this.heap[parentIdx] > this.heap[idx]) {
      // if parent node is greater than current node, swap them and check again
      [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
      this.bubbleUp(parentIdx);
    };
  };

  bubbleDown(i) {
    let heapCopy = this.heap;
    let leftChildIdx = this.getLeftChild(i);
    let rightChildIdx = this.getRightChild(i);
    let leftVal = this.heapCopy[leftChildIdx];
    let rightVal = this.heapCopy[rightChildIdx];

    if (leftVal === undefined) leftVal = Infinity;
    if (rightVal === undefined) rightVal = Infinity;

    if (heapCopy[i] < leftVal && heapCopy[i] < rightVal) return;

    if (rightVal < leftVal) {
      let swapIdx = rightIdx;
    } else {
      let swapIdx = leftIdx;
    }

    [heapCopy[i], heapCopy[swapIdx]] = [heapCopy[swapIdx], heapCopy[i]];
    this.siftDown(swapIdx);
  }


  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  peek() {
    return this.heap[1];
  }


  remove(val) {
    for (let i = 0; i < this.heap.length; i++) {
      // implement remove

    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();
    if (this.heap.length === 1) return this.heap[0]; // null
    let min = this.heap[1];
    // set the min val at top of heap to be the last val in our heap  
    this.heap[1] = this.heap.pop();
    // then bubble it down to balance our heap
    this.bubbleDown(1);
    return min;
  }

}



// class MinHeap {

/**
 * Left child: i * 2;
 * Right child: i * 2 + 1;
 * Parent: i / 2
 */

//   constructor() {
//     this.heap = [null];
//   };

//   /**
//    * returns parent node index of an index element
//    * @param {Number} idx 
//    */

// getMin() {
//   return this.heap[1];
// }
//   getParent(idx) {
//     return Math.floor(idx / 2);
//   };

//   getLeftChild(idx) {
//     return idx * 2;
//   };

//   getRightChild(idx) {
//     return idx * 2 + 1;
//   };

//   insert(node) {
//     this.heap.push(node);
// if (this.heap.length > 1) {
  // let curr = this.heap.length - 1;
  // while (curr > 1 && this.heap[Math.floor(curr / 2)] > this.heap[curr]) {
// [this.heap[Math.floor(curr / 2)], this.heap[curr]] = [this.heap[curr], this.heap[Math.floor(curr / 2)]]
  // curr = Math.floor(curr / 2);
  // }
// }
//     this.siftUp(this.heap.length - 1);
//   };

//   siftUp(idx) {
//     if (idx === 1) return;
//     let parentIdx = this.getParent(idx);
//     if (this.heap[parentIdx] < this.heap[idx]) {
//       [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
//       this.siftUp(parentIdx);
//     }
//   }

//   siftDown(idx) {
//     let array = this.heap;
//     let leftIdx = this.getLeftChild(idx);
//     let rightIdx = this.getRightChild(idx);
//     let leftVal = ary[leftIdx];
//     let rightVal = ary[rightIdx];

//     if (leftVal === undefined) leftVal = -Infinity;
//     if (rightVal === undefined) rightVal = -Infinity;

//     if (array[idx] > leftVal && array[idx] > rightVal) return;

//     if (leftVal < rightVal) {
//       var swapIdx = rightIdx;
//     } else {
//       var swapIdx = leftIdx;
//     }

//     [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]];
//     this.siftDown(swapIdx);
//   }

// }