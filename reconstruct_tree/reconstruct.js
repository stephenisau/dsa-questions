/*
For example, given the following preorder traversal:
[a, b, d, e, c, f, g]

And the following inorder traversal:

[d, b, e, a, f, c, g]

You should return the following tree:

    a
   / \
  b   c
 / \ / \
d  e f  g

def process(node)
  print(node.value)

def inorder(root)
  inorder(root.left)
  process(root)
  inorder(root.right)

def preorder(root)
  process(root)
  preorder(root.left)
  preorder(root.right)



*/


function reconstruct(preorder, inorder) {
  if (!preorder && !inorder) {
    return None
  } 
  // Because preorder traversal adds the root first, we grab the root here
  let root = preorder[0]
  
}