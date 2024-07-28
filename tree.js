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
    if (this.root === null) return 0
    let sum = this.root.val;
    let toVisitQueue = [this.root.children];

    while (toVisitQueue.length){
      let current = toVisitQueue.shift();
      
      for (let child of current) {
        sum += child.val;
        toVisitQueue.push(child.children)
      }
        
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root === null) return 0
    let count = 0;
    if (this.root.val % 2 === 0) count++;
    let toVisitQueue = [this.root.children];

    while (toVisitQueue.length){
      let current = toVisitQueue.shift();
      
      for (let child of current) {
        if (child.val % 2 === 0) count++;
        toVisitQueue.push(child.children)
      }
        
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root === null) return 0
    let count = 0;
    if (this.root.val > lowerBound) count++;
    let toVisitQueue = [this.root.children];

    while (toVisitQueue.length){
      let current = toVisitQueue.shift();
      
      for (let child of current) {
        if (child.val > lowerBound) count++;
        toVisitQueue.push(child.children)
      }
        
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
