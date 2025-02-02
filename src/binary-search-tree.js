import { NotImplementedError } from "../extensions/index.js";

import { Node } from "../extensions/list-tree.js";

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    if (this.root === null) return this.root;
  }

  add(data) {
    if (this.root) this.root.add(data);
    else this.root = new Node(data);
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}
