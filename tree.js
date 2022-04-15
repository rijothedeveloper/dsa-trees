/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (this.root === null) return 0;
    const leafToVisit = [this.root];
    let sum = 0;
    while (leafToVisit.length) {
      const currentNode = leafToVisit.pop();
      sum += currentNode.val;
      for (let node of currentNode.children) {
        leafToVisit.push(node);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0;
    const leafToVisit = [this.root];
    let count = 0;
    while (leafToVisit.length) {
      const currentNode = leafToVisit.pop();
      if (currentNode.val % 2 === 0) {
        count++;
      }
      for (let node of currentNode.children) {
        leafToVisit.push(node);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0;
    const leafToVisit = [this.root];
    let count = 0;
    while (leafToVisit.length) {
      const currentNode = leafToVisit.pop();
      if (currentNode.val > lowerBound) {
        count++;
      }
      for (let node of currentNode.children) {
        leafToVisit.push(node);
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
