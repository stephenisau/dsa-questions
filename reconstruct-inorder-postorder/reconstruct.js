/**
 * 
 * 
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */


function TreeNode(val) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function buildTree(inorder, postorder) {

  function _helper(left, right) {
    if (!inorder || !postorder) {
      return;
    }
    let root = new TreeNode(postorder.pop());
    let idx = inorder.indexOf(root.val);


    root.right = this.buildTree(inorder.slice(idx + 1), postorder);
    root.left = this.buildTree(inorder.slice(0, idx), postorder);
    return root;
  }

  return _helper(inorder, postorder);

}