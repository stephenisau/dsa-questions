# https://leetcode.com/problems/next-permutation/

def nextPermutation(nums) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    
    idx = len(nums) - 1
    while idx >= 0 and nums[idx - 1] >= nums[idx]:
        if idx - 1 < 0:
            break
        idx -= 1
    if idx == 0:
        end = len(nums) - 1
        while idx < end:
            [nums[idx], nums[end]] = [nums[end], nums[idx]]
            idx += 1
            end -= 1
    else:                
        swap_start = idx - 1

        swap_end = len(nums) - 1
        while swap_end >= 0 and nums[swap_end] <= nums[swap_start]:
            swap_end -= 1
        # swap the next permutation
        [nums[swap_start], nums[swap_end]] = [nums[swap_end], nums[swap_start]]

        # sort the rest of the array in-place
        end = len(nums) - 1
        while idx < end:
            [nums[idx], nums[end]] = [nums[end], nums[idx]]
            idx += 1
            end -= 1

def main():
    test1 = [1, 5, 1]
    test2 = [3, 2, 1]
    test3 = [1, 5, 8, 4, 7, 6, 5, 3, 1]
    nextPermutation(test1)
    assert test1 == [5, 1, 1]
    nextPermutation(test2) 
    assert test2 == [1, 2, 3]
    nextPermutation(test3) 
    assert test3 == [1,5,8,5,1,3,4,6,7]

if __name__ == "__main__":
    main()