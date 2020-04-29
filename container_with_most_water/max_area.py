# https://leetcode.com/problems/container-with-most-water/

def max_area(height):
    max_area = 0
    i = 0
    j = len(height) - 1

    while i < j:
        area = min(height[i], height[j]) * (j - i)
        max_area = max(area, max_area)

        if height[i] < height[j]:
            i += 1
        else:
            j -= 1
    return max_area

print("should equal 9: ", max_area([1, 3, 2, 3, 5]))
print("Should equal 49: ", max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))
print("Should equal 40: ", max_area([1,8,6,2,5,4,8,3,3]))

def main():
    assert max_area([1, 3, 2, 3, 5]) == 9
    assert max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
    assert max_area([1,8,6,2,5,4,8,3,3]) == 40

if __name__ == "__main__":
    main()