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
