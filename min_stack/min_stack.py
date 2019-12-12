class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.min = []

    def push(self, x: int) -> None:
        # Add our value to the end of our stack         
        self.stack.append(x)
        # if min stack has nothing, append the value
        if (len(self.min) == 0):
            self.min.append(x)
        else:
            # else we get the min value of the new value, and top of min stack
            self.min.append(min(self.min[len(self.min) - 1], x))
        

    def pop(self) -> None:
        # if stack has something pop the top of stack and min
        if (len(self.stack) > 0):
            self.stack.pop()
            self.min.pop()
            

    def top(self) -> int:
        # if stack has something, return highest item on stack
        if (len(self.stack) > 0):
            return self.stack[len(self.stack) - 1]
        else:
            return None

    def getMin(self) -> int:
        # we are keeping track of the min stack, so we return the top most item on the stack
        if (len(self.min) > 0):
            return self.min[len(self.min) - 1]
        else:
            return None
        
