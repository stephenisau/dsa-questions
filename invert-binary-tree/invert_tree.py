import queue
import doctest
#


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def invert_tree(root):
    """
    >>> invert_tree([4,2,7,1,3,6,9])
    [4,7,2,9,6,3,1]
    """
    if root == None:
        return None
    right = invert_tree(root.right)
    left = invert_tree(root.left)
    root.left = right
    root.right = left
    return root


# iterative approach where we store all the nodes into a queue


def invert_tree(root):
    """
    >>> invert_tree([4,2,7,1,3,6,9])
    [4,7,2,9,6,3,1]
    """
    if not root:
        return None
    q = queue.Queue()
    q.put(root)
    while not q.empty():
        # grab the first item in queue, and swap left and righ values
        curr = q.get()
        temp = curr.left
        curr.left = curr.right
        curr.right = temp
        if not curr.left:
            q.put(curr.left)
        if not curr.right:
            q.put(curr.right)

    return root


if __name__ == "__main__":
    doctest.testmod()
