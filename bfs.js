/**
 * BREADTH FIRST SEARCH (tree)
 * 0(n) - should visit all nodes
 * Out of place - it needs space to store a collection
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if(!this.root) {
      this.root === newNode;
    } else {
      var current = this.root;
      while(true) {
        if(value === current) {
          return undefined
        } else if(value > current.value) {
          if(current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        } else {
          if(current.left) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        }
      }
    }


    bfs() {
      var visited = [];
      var queue = [];
          queue.push(this.root);

      while(queue.length > 0) {
        var currentNode = queue.shift();
            visited.push(currentNode);
          if(node.left) return queue.push(node.left)
          if(node.right) return queue.push(node.right)
      }
      return visited;
    }
  }

}


