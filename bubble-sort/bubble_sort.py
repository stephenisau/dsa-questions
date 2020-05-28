"""


"""
# O(N^2) solution, best case O(N)
def bubble_sort(arr):

    for i in range(len(arr)):
        swap = False
        for j in range(i + 1, len(arr)):
            if (arr[i] > arr[j]):
                [arr[i], arr[j]] = [arr[j], arr[i]]
                # if inner loop in complete, we set swap to True and avoid iterating where we don't need to.
                swap = True
        if swap: break
    return arr


def main():
    test1 = [2, 5, 7, 3, 1]
    answer1 = [1, 2, 3, 5, 7]
    print(f"{answer1} == {bubble_sort(test1)}")

if __name__ == "__main__":
    main()