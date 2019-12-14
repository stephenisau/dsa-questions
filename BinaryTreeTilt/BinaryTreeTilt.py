# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# Return the difference in the sum of the values of the two children nodes

class Solution:
    def findTilt(self, root: TreeNode) -> int:
        self.answer = 0
        
        def dfs(node):
            if not node: 
                return 0
            left = dfs(node.left)
            right = dfs(node.right)
            self.answer += abs(left - right)
            
            return node.val + left + right
        
        dfs(root)
        return self.answer
