    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head
        nextNode = None
        
        while curr != None:
            nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
            
        return prev
        
