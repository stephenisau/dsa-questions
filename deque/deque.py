"""A Deque is a double-ended queue

This implementation has the following methods:
    - isEmpty(): returns boolean indicating if deque is empty
    - addFront(item): adds item to front of deque
    - addRear(item): adds item to rear of deque
    - removeFront(): pops item from front of deque
    - removeRear(): pops item from rear of deque
    - size(): returns int indicating size of our deque
"""

class Deque:

    def __init__(self):
        self.deque = []

    def isEmpty(self) -> bool:
        """Returns boolean indicating if our deque is empty

        Returns:
            bool: True if empty, False if not empty
        """
        return len(self.deque) == 0
    
    def addRear(self, item): 
        """Adds item to rear of our deque

        Args:
            item (any): item to be added to front of our deque
        """
        self.deque.append(item)

    def addFront(self, item):
        """Adds item to front of our deque

        Args:
            item (any): Item to be added to back of our deque
        """
        self.deque.insert(0, item)
    
    def removeFront(self):
        """Returns item from front of our deque
        """
        return self.deque.pop()
    
    def removeRear(self):
        """Returns item from rear of our deque
        """
        return self.deque.pop(0)

    def size(self) -> int:
        """Returns int representing size of our deque

        Returns:
            int: size of our deque
        """
        return len(self.deque)

def main():
    d = Deque()
    assert d.isEmpty() == True

    items = [2, "dog", 3.14, True]
    for i, item in enumerate(items):
        if i % 2 == 0:
            d.addRear(item)
        else:
            d.addFront(item)
    assert d.size() == len(items)
    r = d.removeRear()
    f = d.removeFront()
    assert r == True
    assert f == 3.14

if __name__ == '__main__':
    main()