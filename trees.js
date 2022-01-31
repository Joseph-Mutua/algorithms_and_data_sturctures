// BINARY TREES

function BinaryTreeNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// lookup O(log N)
// insert O(log N)
// delete O(log N)

// Perfect Binary Trees::
// Number of Nodes at each level = 2^level e.g Level 0: 2^0 = 1;
// Total no. of Nodes:: 2^levels - 1;
// Log (no. of nodes) = levels;

// Going left: Decrease
// Going Right: Increase

// Pros of Binary Search Trees
// 1. Better than O(n)
// 2. It's ordered
// 3. Have a flexible size

// Cons of Binary Search Trees
// 1. No O(1) Operations

// Implementation
class Node {}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {}
  lookup(value) {}
  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(150);
tree.insert(75);
tree.insert(1);


// BFS VS DFS

// BFS                      DFS
// PROS
// Shortest path            Less memory
// Closer nodes             Does path exist

// CONS
// More memory              Can be slow

// If you know  a solution is not far from root of tree: BFS
// If tree is very deep and solutions are rare: BFS --> DFS WILL TAKE LONG
// If the tree is very wide: DFS --> BFS will take lots of memory
// If solutions are frequent but located deep in the tree: DFS
// Determining whether a path exists between two nodes: DFS
// Finding the shortest path: BFS