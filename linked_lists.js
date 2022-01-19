// Iterating through a linked list
const linkedList = (head) => {
  let currentNode = head;

  while (currentNode) {
    // Perform operation

    currentNode = currentNode.next;
  }
};

// Given a linked list, return it in reverse
const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
