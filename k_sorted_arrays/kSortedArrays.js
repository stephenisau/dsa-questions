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
 * Min-Heap solution, also n * Log(n) time-complexity
 * @param {Array[Array]} arrays
 */

// class MinHeap {

//   constructor() {
//     this.heap = [null];
//   };

//   /**
//    * returns parent node index of an index element
//    * @param {Number} idx 
//    */
//   getParent(idx) {
//     return Math.floor(idx / 2);
//   };

//   getLeftChild(idx) {
//     return idx * 2;
//   };

//   getRightChild(idx) {
//     return idx * 2 + 1;
//   };

//   insert(val) {
//     this.heap.push(val);
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