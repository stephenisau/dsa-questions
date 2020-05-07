"""
PSEUDOCODE
- initialize empty array where we keep track of the points where C=S[i] => points of origin
- initialize another empty array
- loop thru our string
    append the difference in the two pointers by points of origin
O(n^2) solution
"""

def shortestToChar(S: str, C: str) -> List[int]:
    """
    :type S: str
    :type C: str
    :rtype List[int]
    """

    differences = []

    for i, v in enumerate(S):
        if v == C:
            differences.append(i)

    output = []
    for i in range(len(S)):
        output.append(min([abs(j - i) for j in differences]))
    return output

def shortest_to_char(S: str, C: str) -> List[int]:
    """
    :type S: str
    :type C: str
    :rtype List[int]
    """
    pass


if __name__ == "__main__":
    S = "loveleetcode"
    C = 'e'
    assert shortestToChar(S, C) == [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]