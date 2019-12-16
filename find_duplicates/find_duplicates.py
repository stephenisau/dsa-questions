def find_duplicates(arr1, arr2):
    
    output = []

    def binary_search(arr, target):
        start = 0
        end = len(arr) 

        while start <= end:
            mid = (start + end) // 2
            if arr[mid] == target:
                return arr[mid]
            if arr[mid] < target:
                start = mid + 1
            else:
                end = mid - 1
        return -1


    if (len(arr1) > len(arr2)):
        for i in range(len(arr1)):
            if binary_search(arr2, arr1[i]) != -1:
                output.append(arr1[i])

    else:
        for i in range(len(arr2)):
            if binary_search(arr1, arr2[i]) != -1:
                output.append(arr2[i])

    return output