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