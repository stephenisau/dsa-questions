def insertionSort(arr):
    for i in range(1, len(arr)):
        curr = arr[i]
        pos = i
        while pos > 0 and arr[pos-1] > curr:
            arr[pos] = arr[pos-1]
            pos -= 1
        arr[pos] = curr
    

if __name__ == '__main__':
    arr = [2, 4, 10, 15, 20, 33, -1]
    insertionSort(arr)
    assert arr == sorted(arr)
