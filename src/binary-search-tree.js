const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.newRoot = null;
  }

  root() {
    return this.newRoot;
  }

  add(data) {
    this.newRoot = insertData(this.newRoot, data);

    function insertData(node, data) {
      if (!(node)) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = insertData(node.left, data);
      } else {
        node.right = insertData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchData(this.newRoot, data);

    function searchData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchData(node.left, data)
        : searchData(node.right, data);
    }
  }

  find(data) {
    return searchDataFind(this.newRoot, data);

    function searchDataFind(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data
        ? searchDataFind(node.left, data)
        : searchDataFind(node.right, data);
    }
  }

  remove(data) {
    this.newRoot = removeNode(this.newRoot, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // Если нет ни левого ни правого потомка
        if (!node.left && !node.right) {
          return null;
        }
        // Если нет левого потомка
        if (!node.left) {
          node = node.right;
          return node;
        }
        // Если нет правого потомка
        if (!node.right) {
          node = node.left;
          return node;
        }
        // Если есть оба потомка
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.newRoot) {
      return;
    }

    let minnode = this.newRoot;
    while (minnode.left) {
      minnode = minnode.left;
    }
    return minnode.data;
  }

  max() {
    if (!this.newRoot) {
      return;
    }

    let maxnode = this.newRoot;
    while (maxnode.right) {
      maxnode = maxnode.right;
    }
    return maxnode.data;
  }

}

module.exports = {
  BinarySearchTree
};