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


// Given a linked list and numbers m and n, return it
// Back with only positions m to n in reverse



