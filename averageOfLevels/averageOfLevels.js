/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 const averageOfLevels = (root) => {
   let output = [];
   let queue = [root];
    while (queue.length) {
      let sum = 0;
      let size = queue.length;
      for (let i = 0; i < size; i++) {
        let curr = queue.shift();
        sum += curr.val;
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      };
      output.push(sum / size);
    }
    return output;
 }