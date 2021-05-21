def quickSort(arr):
    quickSortHelper(arr, 0, len(arr) - 1)

def quickSortHelper(arr, first, last):
    if first < last:
        split = partition(arr, first, last)
        quickSortHelper(arr, first, split-1)
        quickSortHelper(arr, split+1, last)

def partition(arr, first, last):
    
    pivot = arr[first]
    left = first + 1
    right = last

    done = False
    while not done:
        
        # move left pointer
        while left < right and arr[left] <= pivot:
            left += 1
        
        while arr[right] >= pivot and right >= left:
            right -= 1
        
        if right < left:
            done = True

        else:
            temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

    temp = arr[first]
    arr[first] = arr[right]
    arr[right] = temp
    return right

if __name__ == '__main__':
    arr = [12, 24 , 51, 19, 41, 2, 11]
    copy = arr[:]
    quickSort(copy)
    assert copy == sorted(arr)