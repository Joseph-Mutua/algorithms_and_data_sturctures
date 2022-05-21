// Given a binary tree, find its maximum depth. Maximum depth is the number
// of nodes along the longest path from the root node to the furthest leaf node

// Traversal Type

// Preorder   <-- NRL -->
// Inorder    <-- RNL -->
// Post order <-- RLN -->

// Pseudo code
function recursive(node, count) {
  if (node === null) return count;

  count++;
  return Math.max(recursive(node.left, count), recursive(node.right));
}

// Actual Solution
const maxDepth = (node, currentDepth) => {
  if (!node) {
    return currentDepth;
  }
  currentDepth++;

  return Math.max(
    maxDepth(node.left, currentDepth),
    maxDepth(node.right, currentDepth)
  );
};

// BFS CODE
BFS = function (root) {
  let res = [],
    q = [root];

  while (q.length) {
    node = q.shift();
    res.push(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return res;
};

// Given a binary tree, return the level order
// Traversal of the nodes' values as an array

const levelOrder = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length,
      count = 0;
    let currentLevelValues = [];

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevelValues);
  }
  return result;
};

// Given a binary tree, imagine you're standing to the right
// of the tree. Return an array of the values of the nodes
// you can see ordered from top to bottom

// 1. BFS
const rightSideView = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length,
      count = 0;
    let currentLevelValues = [];

    while (count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      count++;
    }
    result.push(currentLevelValues[currentLevelValues.length - 1]);
  }
  return result;
};

// 2. DFS
const rightSideView = (root) => {
  const result = [];

  dfs(root, 0, result);
  return result;
};

const dfs = (node, currentLevel, result) => {
  if (!node) return;

  if (currentLevel >= result.length) {
    result.push(node.value);
  }

  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }

  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
};

// FULL and COMPLETE BINARY TREES

// 1. FULL TREE         --> Every tree node has either 2 or zero children.
// 2. COMPLETE TREE     --> One where each level is completely full, except possibly the last
//                          is completely filled, and all nodes are as far left as posible
// 3. FULL AND COMPLETE --> Every level is filled with children (Both full and complete)

// Given a complete binary tree, count the number of nodes

const countNodes = (root) => {
  if (!root) return 0;

  const height = getTreeHeight(root);

  if (height === 0) return 1;

  const upperCount = Math.pow(2, height) - 1;

  let left = 0,
    right = upperCount;

  while (left < right) {
    let indexToFind = Math.ceil((left + right) / 2);
    if (nodeExists(indexToFind, height, root)) {
      left = indexToFind;
    } else {
      right = indexToFind - 1;
    }
  }

  return upperCount + left + 1;
};

const getTreeHeight = (root) => {
  let height = 0;

  while (root.left !== null) {
    height++;
    root = root.left;
  }
  return height;
};

const nodeExists = (indexToFind, height, node) => {
  let left = 0,
    right = Math.pow(2, height) - 1,
    count = 0;

  while (count < height) {
    let midOfNode = Math.ceil((left + right) / 2);

    if (indexToFind >= midOfNode) {
      node = node.right;
      left = midOfNode;
    } else {
      node = node.left;
      right = midOfNode - 1;
    }
    count++;
  }

  return node !== null;
};
