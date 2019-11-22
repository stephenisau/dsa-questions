# Recursive solution
def isSymmetric(self, root: TreeNode) -> bool:
    
    if not root:
        return True
    
    def _traverse(left, right):
        
        if not left and not right:
            return True
        if not left or not right:
            return False
        
        return left.val == right.val and _traverse(left.left, right.right) and _traverse(left.right, right.left)
    
    return _traverse(root.left, root.right)



# Iterative solution


