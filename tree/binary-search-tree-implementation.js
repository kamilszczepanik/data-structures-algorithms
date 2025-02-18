class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    let counter = 0;
    let parentNode = null;
    let currentNode = this.root;
    let side = null;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        side = "left";
      } else if (newNode.value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        side = "right";
      }
      counter++;
    }

    if (counter === 0) {
      this.root = newNode;
    } else {
      switch (side) {
        case "left":
          parentNode.left = newNode;
          break;
        case "right":
          parentNode.right = newNode;
          break;
      }
    }

    return this;
  }

  lookup(value) {}

  remove(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.remove(170);
JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  console.log(tree);
  return tree;
}
