// Doubly-Linked List Syntax

// class ListNode {
//     value: any,
//     prev: ListNode,
//     next: ListNode
// }

// Given a doubly linked list, list nodes also have a child
// property that can point to a separate doubly linked list.
// These child lists can also have one or more child doubly linked
// list of thir own and so on. Return the list as a single level of
// a flattened doubly linked list

const flattenLinkedList = () => {
  if (!head) return head;

  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;

      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = child;
    }
  }
  return head;
};
