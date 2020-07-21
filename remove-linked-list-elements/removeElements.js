function ListNode(val, next) {
  this.val = (val === undefined) ? 0 : val;
  this.next = (next === undefined ? null : next);
}

var removeElements = function (head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let prev = dummy;
  let curr = head;
  while (curr) {
    // if our val is found, we move our previous pointer to the next pointer
    if (curr.val === val) {

      prev.next = curr.next
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return dummy.next;
};



const newList = new ListNode(1);
newList.next = new ListNode(2);
newList.next.next = new ListNode(6);
newList.next.next.next = new ListNode(3);
newList.next.next.next.next = new ListNode(4);
newList.next.next.next.next.next = new ListNode(5);
newList.next.next.next.next.next.next = new ListNode(6);