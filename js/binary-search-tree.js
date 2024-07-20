import node from "./node.js";
import tree from "./tree.js";

const binarySearchTree = () => {
  const buildTree = (array, start, end) => {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    const TREE = tree(array[mid]);

    TREE.setLeft(buildTree(array, start, mid - 1));
    TREE.setRight(buildTree(array, mid + 1, end));

    return TREE.root;
  };

  const insert = (BST, value) => {
    let bst = BST;
    let val = value;

    if (bst === null) {
      bst = node(val);
      return bst;
    }

    if (val > bst.data) {
      bst.right = insert(bst.right, val);
    } else if (val < bst.data) {
      bst.left = insert(bst.left, val);
    }

    return BST;
  };

  const bstMinimum = (node) => {
    let min = node.data;
    while (node.left !== null) {
      min = node.left.data;
      node = node.left;
    }
    return min;
  };

  const deleteItem = (bst, node) => {
    if (bst === null) {
      return bst;
    }

    if (node > bst.data) {
      bst.right = deleteItem(bst.right, node);
    } else if (node < bst.data) {
      bst.left = deleteItem(bst.left, node);
    } else {
      if (bst.right === null) {
        return bst.left;
      }
      if (bst.left === null) {
        return bst.right;
      } else {
        bst.data = bstMinimum(bst.right);

        bst.right = deleteItem(bst.right, bst.data);
      }
    }
    return bst;
  };

  const find = (BST, VALUE) => {
    let bst = BST,
      value = VALUE;

    if (bst === null || bst.data === value) {
      return bst;
    }

    if (value > bst.data) {
      return find(bst.right, value);
    }

    return find(bst.left, value);
  };

  const levelOrder = (BST, q = []) => {
    let bst = BST;
    let array = [];

    if (bst.left !== null) {
      q.push(bst.left);
    }

    if (bst.right !== null) {
      q.push(bst.right);
    }

    if (q.length === 0) {
      return [bst.data];
    }

    return array.concat(bst.data).concat(levelOrder(q.shift(), q));
  };

  const preOrder = (BST) => {
    let bst = BST;
    let array = [];

    if (bst === null) {
      return bst;
    }

    return array
      .concat(bst.data)
      .concat(preOrder(bst.left))
      .concat(preOrder(bst.right))
      .filter((item) => item !== null);
  };

  const inOrder = (BST) => {
    let bst = BST;
    let array = [];

    if (bst === null) {
      return bst;
    }

    return array
      .concat(inOrder(bst.left))
      .concat(bst.data)
      .concat(inOrder(bst.right))
      .filter((item) => item !== null);
  };

  const postOrder = (BST) => {
    let bst = BST;
    let array = [];

    if (bst === null) {
      return bst;
    }

    return array
      .concat(postOrder(bst.left))
      .concat(postOrder(bst.right))
      .concat(bst.data)
      .filter((item) => item !== null);
  };

  const height = (tree, number) => {
    let node = tree;
    let num = number;

    let queue = [];
    let level = 0;

    let totalHeight = -1;
    let depth = -1;

    queue.push(node);

    while (queue.length > 0) {
      let queueSize = queue.length;

      for (let i = 0; i < queueSize; i++) {
        let front = queue.shift();

        if (front.data === num) {
          depth = level;
        }

        if (front.left !== null) {
          queue.push(front.left);
        }
        if (front.right !== null) {
          queue.push(front.right);
        }
      }
      level++;
    }

    totalHeight = level - depth - 1;

    return totalHeight;
  };

  const depth = (tree, number) => {
    let node = tree;
    let num = number;

    let queue = [];
    let level = 0;

    let height = -1;
    let totalDepth = -1;

    queue.push(node);

    while (queue.length > 0) {
      let queueSize = queue.length;

      for (let i = 0; i < queueSize; i++) {
        let front = queue.shift();

        if (front.data === num) {
          totalDepth = level;
        }

        if (front.left !== null) {
          queue.push(front.left);
        }
        if (front.right !== null) {
          queue.push(front.right);
        }
      }
      level++;
    }

    height = level - totalDepth - 1;

    return totalDepth;
  };

  const isBalanced = (node) => {
    let tree = node;

    if (tree === null) {
      return 0;
    }

    let leftHeight = isBalanced(tree.left);
    if (leftHeight === -1) {
      return -1;
    }

    let rightHeight = isBalanced(tree.right);
    if (rightHeight === -1) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return Math.max(leftHeight - rightHeight) + 1;
  };

  const rebalance = (tree) => {
    let node = tree;
    let array = inOrder(node);

    const newTree = buildTree(array, 0, array.length - 1);
    return newTree;
  };

  return {
    buildTree,
    insert,
    deleteItem,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

export default binarySearchTree;
