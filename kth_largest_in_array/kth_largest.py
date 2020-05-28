"""
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
"""

# SORT SOLUTION O(nlog(n)) + O(N) space.
# store sorted array in variable
    # return the kth element in the array
def kth_largest_arr(arr, k):
    sorted_arr = sorted(arr)
    return sorted_arr[-k]

# HEAP SOLUTION Time Complexity: O(Nlog(n)), Space: O(k)
# Add all elements in the array into a heap data structure.
# poll, or pop the head of the heap to maintain a k size heap
# once we've added all items into the heap, then we return the head which will be the k'th largest element (if heap is a min-heap)
# https://stackoverflow.com/questions/30443150/maintain-a-fixed-size-heap-python
import heapq
class MinHeap():
    def __init__(self, k):
        """Initialize the min-heap"""
        self.heap = []
        self.size = k
        heapq.heapify(self.heap)
        
    def add(self, el):
        if len(self.heap) < self.size: #maintain the size of our heap
            heapq.heappush(self.heap, el)
        else:
            # push element to end, pop the smallets from our min-heap
            heapq.heappushpop(self.heap, el)
    def get_top(self):
        return self.heap[0]


def test_heap_solution():
    arr = [3, 2, 1, 5, 6, 4]
    min_heap = MinHeap(3)
    for num in arr:
        min_heap.add(num)
    largest = min_heap.get_top()
    assert largest == 4

print(test_heap_solution()) # this should be silent if assertions are true



# QUICKSELECT SOLUTION
# pattern to recognize for this solution: kth largest el == (n - k) smallest 
import random
def find_k_largest(nums, k):
    idx = len(nums) - k
    low = 0
    high = len(nums) - 1
    while low < high:
        j = partition(nums, low, high)
        if j < k:
            low = j + 1
        elif j > k:
            high = j - 1
        else:
            break
    return nums[k]

def _partition(arr, low, high):
    i = low
    j = high + 1
    while True:
        while i < high and less(arr[i + 1], arr[low]):
            while 

arr = [3,2,3,1,2,4,5,5,6]
k = 4
print(find_k_largest(arr, k))