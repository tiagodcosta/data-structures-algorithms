/**
 * DEPTH FIRST SEARCH (tree)
 * 0(n) - should visit all nodes
 * InPlace - recursion
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


    dfs() {
      var data = [];
      var current;
      if(!this.root) {
        current = this.root;
      }

      function transverse(node) {
        data.push(node);
        if(node.left) {
          transverse(node.left)
        } else {
          transverse(node.right)
        }
        transverse(current)
      }
      return data;
    }
  }

}