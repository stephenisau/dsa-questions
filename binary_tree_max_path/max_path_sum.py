class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
"""

Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. 
The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
"""

# create a max_sum variable
# write a function that traverses the tree 
    # base case - node is null, max gain is 0
    # call our function to get the max gain from left and right cihldren of current nodes
    # we need to check if the old accumulated max gain is > new accumulated max gain
    # rewrite gain if (gain = node.val + left + right) > max_sum
    # update max sum if max_sum > gain




class BST:


    def max_path_sum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        def max_gain(node):
            """
            Tree traversal method, calculates the max gain for a given node
            """
            nonlocal max_sum
            if not node:
                return 0
            
            # max starting value of the left and right leaf nodes of a given root.
            left = max(max_gain(node.left), 0)
            right = max(max_gain(node.right), 0)

            # calculate a price path
            price_path = node.val + left + right
            
            max_sum = max(max_sum, price_path)

            # we build up the price path here
            return node.val + max(left, right)
        max_sum = float(-inf)
        max_gain(root)
        return max_sum
