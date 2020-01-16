def four_sum(arr, target):
    n = len(arr)

    # if there are fewer than 4 items in arr, by
    # definition no quadruplet exists whose sum is s
    if (n < 4):
        return []

    # sort arr in an ascending order
    arr = sorted(arr)

    for i in range(n-4):
        for j=i+1 in range(n - 3):
            # r stores the complementing sum
            r = target - (arr[i] + arr[j])

            # check for sum r in subarray arr[j+1…n-1]
            low = j + 1
            high = n - 1

            while (low < high):
                if (arr[low] + arr[high] < r):
                    low += 1

                else if (arr[low] + arr[high] > r):
                    high-= 1

                # quadruplet with given sum found
                else:
                    return [arr[i], arr[j], arr[low], arr[high]]

    return []