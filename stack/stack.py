"""
Basic Stack Data Structure: Following LIFO operations (Last in First out)
Design a Stack abstract data structure that has the following methods:
    - push(item): accepts an item to add to the ADT
    - pop(): remove an item from the top of the stack
    - peek(): views top-most item of the ADT
    - isEmpty(): returns boolean indicating whether the stack is empty
"""

class Stack:

    def __init__(self):
        self.stack = []
    
    def isEmpty(self):
        """Returns boolean value indicating if stack is empty"""
        return len(self.stack) == 0

    def push(self, item):
        """Appends item onto our stack"""
        self.stack.append(item)

    def pop(self):
        """Returns first element of our stack"""
        return self.stack.pop(0)
    
    def size(self):
        """Returns size of our stack"""
        return len(self.stack)


def main():
    stack = Stack()
    assert stack.isEmpty() == True
    stack.push(1)
    assert stack.size() == 1
    assert stack.isEmpty() == False
    stack.push(3)
    stack.push(5)
    assert stack.size() == 3
    val = stack.pop()
    assert val == 1
    assert stack.size() == 2

if __name__ == '__main__':
    main()