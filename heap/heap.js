/**
 * Heap Class
 * 
 */

 class Heap {
   constructor() {
     this.heap = []
   }

   insert(val ){
     this.heap.push(val);
     this.bubbleUp(this.heap.length - 1);
   }

   bubbleUp(idx) {
     while (idx > 0) {
       let parent = Math.floor((idx + 1) / 2) - 1;

       if (this.heap[parent] > this.heap[idx]) {
         let temp = this.heap[parent];
         this.heap[parent] = this.heap[idx];
         this.heap[idx] = temp;
       }
       idx = parent;
     }
   }
   
 }