"""
Infix expression is defined as the following: 
    (A + B) * C
To preserve order of operations, we can convert this human-readable infix expression to one of the following:
    - Prefix expression => * + A B C
    - Postfix expression => A B + C *
"""
from stack import Stack
import string


letters = string.ascii_uppercase
LEFT_PAREN = ")"
RIGHT_PAREN = "("

def infixToPostfix(string: str) -> str:
    """ Convert infix operations to postfix operations
    """
    precedence = {}
    precedence["*"] = 3
    precedence["/"] = 3
    precedence["+"] = 2
    precedence["-"] = 2
    precedence["("] = 1
    
    operationStack = Stack()
    output = []

    tokenList = string.split("").strip()
    for token in tokenList:

        if token in letters:
            output.append(token)

        elif token == LEFT_PAREN:
            operationStack.append(token)

        elif token == RIGHT_PAREN:
            topToken = operationStack.pop()
            while topToken != LEFT_PAREN:
                output.append(token)
                topToken = operationStack.pop()
        else:
            top = operationStack.peek()
            while not operationStack.isEmpty() and precedence[top] >= precedence[token]:
                output.append(operationStack.pop())
            operationStack.append(token)
    while not operationStack.isEmpty():
        output.append(operationStack.pop())
    
    return " ".join(output)

def main():
    infix = "A + B * C + D"
    postfix = "A B C * + D"
    ans = infixToPostfix(infix)
    assert ans == postfit, "Not valid conversion"
    infix = "(A + B) * (C + D)"
    postfix = "A B + C D + *"
    ans = infixToPostfix(infix)
    assert ans == postfit, "Not valid conversion"
    infix = "A * B + C * D"
    postfix = "A B * C D +"
    ans = infixToPostfix(infix)
    assert ans == postfit, "Not valid conversion"
    infix = "A + B + C + D"
    postfix = "A B + C + D +"
    ans = infixToPostfix(infix)
    assert ans == postfit, "Not valid conversion"