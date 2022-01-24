// Linked list time
// Prepend - O(1)
// Append - O(1)
// Lookup - O(N)
// Insert - O(N)




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
const reverseBetween = (head, m, n) => {
  let currentPos = 1,
    currentNode = head,
    start = head;
  while (currentPos < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null,
    tail = currentNode;
  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;

    currentNode = next;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;

  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};