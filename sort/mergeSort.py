def mergeSort(arr):
    print('splitting: ', arr)
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]
        print('left half: ', left)
        print('right half: ', right)
        mergeSort(left)
        mergeSort(right)

        i = 0
        j = 0
        k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
    print('merging: ', arr)


if __name__ == '__main__':
    arr = [2, 13, 90, 24, 91, 15]
    mergeSort(arr)
    assert sorted(arr) == sorted(arr)