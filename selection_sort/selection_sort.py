"""
Set minimum value to be the first array index
set a second pointer
move the second pointer until we find a value that is less then the first array value
if we find this value, swap them


"""


def selection_sort(arr):
    """
    :type arr: List[int]
    :rtype: List[int] 
    
    """
    if len(arr) < 1:
        return arr
    if len(arr) == 0:
        return None
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[j] > arr[i]:
                [arr[i], arr[j]] = [arr[j], arr[i]]
    
    return arr

def main():
    test = [1, 4, 6, 2, 3, -1]
    answer = [-1, 1, 2, 3, 4, 6]
    assert selection_sort(test) == answer

if __name__ == "__main__":
    main()
    
