class MinHeap {
  constructor(arr) {
    this.heap = [null]
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

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (heapCopy[i] < leftVal && heapCopy[i] < rightVal) return;

    let swapIdx;
    // Set the swap index to be the value
    if (rightVal < leftVal) {
      swapIdx = rightChildIdx;
    } else {
      swapIdx = leftChildIdx;
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

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  peek() {
    return this.heap[1];
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

