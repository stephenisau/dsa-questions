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
