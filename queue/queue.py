"""
Queue abstract datastructure
    - First In First Out (FIFO) data structure
"""

class Queue:
    def __init__(self):
        self.queue = []
    
    def isEmpty(self) -> bool:
        """Returns bool indicating if queue is empty

        Returns:
            bool: True if empty, False otherwise
        """
        return len(self.queue) == 0
    
    def enqueue(self, item):
        """Enqueue item to our queue

        Args:
            item ([type]): any arbitrary item that we add to our queue
        """
        self.queue.insert(0, item)
    
    def dequeue(self) -> any:
        """Returns top-most item on our queue

        Returns:
            any: top-level item of our queue if not empty
        """
        return self.queue.pop()
    
    def size(self) -> int:
        """Returns an integer representing the size of our queue

        Returns:
            int: integer representing size of our queue
        """
        return len(self.queue)


def main():
    queue = Queue()
    vals = [1, 2, 3]
    assert queue.size() == 0, "Not empty!"
    for val in vals:
        queue.enqueue(val)
    assert queue.isEmpty() == False
    val = queue.dequeue()
    assert val == vals[0]
    size = queue.size()
    while not queue.isEmpty():
        val = queue.dequeue()
        size -= 1
        assert size == queue.size()


if __name__ == '__main__':
    main()
