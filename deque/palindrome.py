from deque import Deque

def palindrome(string: str) -> bool:
    """Returns boolean if input string is a palindrome

    Args:
        string (str): input string to check against palindrome

    Returns:
        bool: True if palindrome, False if not
    """
    d = Deque()
    for ch in string:
        d.addRear(ch)
    
    equal = True
    while d.size() > 1 and equal:
        front = d.removeFront()
        rear = d.removeRear()
        if front != rear:
            equal = False
    return equal

def main():
    s = "racecar"
    assert palindrome(s) == True
    s = "notapalindrome"
    assert palindrome(s) == False