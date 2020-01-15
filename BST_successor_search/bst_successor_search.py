class Node:

    def __init__(self, key):
        """
        Constructor to create Tree Node    
        """
        self.key = key
        self.left = None
        self.right = None
        self.parent = None


class BinarySearchTree:

    def __init__(self):
        """
        Constructor for binary search tree
        """
        self.root = None

    def find_inorder_successor(self, inputNode):
        curr = inputNode
        if curr.right != None:
            return find_min_key_in_subtree(curr.right)

        parent = inputNode.parent

        while (parent != None) and (curr == parent.right):
            curr = parent
            parent = curr.parent
        return parent

        while (inputNode.left != None):
            # go left
            inputNode = inputNode.left
        return inputNode

    def insert(self, key):
        if (self.root == None):
            self.root = Node(key)
            return

        curr = self.root
        newNode = Node(key)

        while (curr != None):
            if (key < curr.key):
                if (curr.left != None):
                    curr.left = newNode
                    newNode.parent = curr
                    break
                else:
                    curr = curr.left
            else:
                if (curr.right != None):
                    curr.right = newNode
                    newNode.parent = curr
                    break
                else:
                    curr = curr.right

    def get_node_by_key(self, key):
        curr = self.root
        while (curr != None):
            if (key == curr.key):
                return curr
            if (key < curr.key):
                curr = curr.left
            else:
                curr = curr.right

        return None


def test():
    bst = BinarySearchTree()
    bst.insert(20)
    bst.insert(9)
    bst.insert(25)
    bst.insert(5)
    bst.insert(12)
    bst.insert(11)
    bst.insert(14)
    
    test = bst.get_node_by_key(9)

    print("bst: ", bst)
    print(test)
    # Find the in order successor of test
    succ = bst.find_inorder_successor(test)

    # Print the key of the successor node
    if succ is not None:
        print ("\nInorder Successor of %d is %d " \
                %(test.key , succ.key))
    else:
        print ("\nInorder Successor doesn't exist")


if __name__ == "__main__":
    # test()

