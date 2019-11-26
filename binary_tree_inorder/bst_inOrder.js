/*

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
*/

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

 /*
In-order DFS => STACK
 - Traverse Left
 - Visit node
 - Traverse right
 */
var inorderTraversal = function(root) {
  let stack = [];
  let output = [];
  
  if (!root) {
      return output;
  }
  
  let curr = root;
  
  while (curr !== null || stack.length) {
      
      while (curr) {
          stack.push(curr)    ;
          curr = curr.left;
      }
      
      curr = stack.pop();
      output.push(curr.val);
      
      curr = curr.right;
  }
  
  return output;
  
};