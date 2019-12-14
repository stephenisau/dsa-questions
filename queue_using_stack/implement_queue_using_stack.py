class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.s1 = []
        self.s2 = []

    def push(self, x):
	# If stack 1 has something, move it to the other stack
        while len(self.s1) > 0:
            self.s2.append(self.s1.pop())
	# append the input to stack 1
        self.s1.append(x)
	
	# if stack 2 has something, move it to stack 1
        while len(self.s2) > 0:
            self.s1.append(self.s2.pop())

    def pop(self):
	# return last element of stack 1
        return self.s1.pop()

    def peek(self):
	# return first element of stack 1
        return self.s1[-1]

    def empty(self):
        return not self.s1 and not self.s2
