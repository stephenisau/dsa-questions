from node import Node

class UnorderedList:

    def __init__(self, val = None):
        self.head = val
        self.count = 0

    def is_empty(self) -> bool:
        """Returns boolean if unordered list is empty

        Returns:
            [bool]: Boolean for unordered list type
        """
        return self.head == None
    
    def add(self, val):
        """Add item to unordered list

        Args:
            item (any): Add an item to the unordered list
        """
        newItem = Node(val)
        newItem.setNext(self.head)
        self.head = newItem
        self.count += 1

    def length(self) -> int:
        """Returns integer representing length of our unordered list

        Returns:
            int: int represents length of our unordered list
        """
        return self.count

    def search(self, val: any) -> bool:
        """Searches our unordered list for a value

        Args:
            val (any): Finds value in the unordered list
        
        Returns:
            bool: True if value is in our list, False otherwise
        """
        curr = self.head
        found = False
        while curr is not None and not found:
            print("curr: ", curr.getVal())
            if curr.getVal() == val:
                found = True
            else:
                curr = curr.getNext()
        return found
    
    def remove(self, val: any):
        """Removes item from our unordered list

        Args:
            item (item): Item to be removed from our unordered list
        """
        curr = self.head
        prev = None
        found = False
        while not found:
            if curr.getVal() == item:
                found = True
            else:
                prev = curr
                curr = curr.getNext()
        
        if prev == None:
            self.head = curr.getNext()
        else:
            prev.setNext(curr.getNext())
        
