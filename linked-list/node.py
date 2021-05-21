
class Node:
    """Linked List Node"""
    def __init__(self, val: any):
        self.val = val
        self.next = None

    def getVal(self):
        """Returns data of node"""
        return self.val

    def getNext(self):
        """Returns next value associated with the node"""
        return self.next
    
    def setVal(self, newVal):
        """Sets value of the node"""
        self.val = newVal
    
    def setNext(self, nextVal):
        newNode = Node(nextVal)
        self.next = newNode