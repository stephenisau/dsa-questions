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


def is_symmetric(self, root: TreeNode) -> bool:

    if not root:
        return True

    l = [root.left]
    r = [root.right]

    while (len(l) and len(r)):
        le = l.pop()
        re = r.pop()

        if le == re: 
            continue
        if (le and re):
            if (le.val != re.val):
                return False
            l.append(le.right)
            l.append(le.left)
            re.append(re.left)
            re.append(re.right)
        
        return False

function isSymmetric (root) {
    if (!root) return true;
    
    const l = [root.left];
    const r = [root.right];
    
    while (l.length && r.length) {
        const le = l.pop();        
        const re = r.pop();
        if (le === re) continue;
        if (le && re){
            if (le.val != re.val) return false; 
            l.push(le.right)
            l.push(le.left)
            r.push(re.left)
            r.push(re.right)
            continue;
        }
        return false;
    }
    return true;
}

