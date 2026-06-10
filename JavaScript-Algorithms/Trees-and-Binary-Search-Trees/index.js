class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
  insertLeft(value) {
    if (!this.leftChild) {
      this.leftChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.leftChild = this.leftChild;
      this.leftChild = newNode;
    }
  }

  insertRight(value) {
    if (!this.rightChild) {
      this.rightChild = new Node(value);
    } else {
      let newNode = new Node(value);
      newNode.rightChild = this.rightChild;
      this.rightChild = newNode;
    }
  }
}
// //initial setup
// let tree = new Node(3);
// tree.insertLeft(1);
// tree.insertRight(5);

// //adding a new node to the tree
// tree.insertLeft(2);
// console.log(tree);

const H = new Node("H");
H.insertLeft("E");
H.insertRight("S");

const E = H.leftChild;
const S = H.rightChild;

E.insertRight("G");

S.insertLeft("I");
S.insertLeft("L");
S.insertRight("Y");

console.log(H);

class BSNode {
  constructor(value) {
    this.value = value;
    this.leftChild;
    this.rightChild;
  }

  insertNode(newVal) {
    if (!this.value) {
      this.value = newVal;
    } else if (newVal > this.value && this.rightChild) {
      this.rightChild.insertNode(newVal);
    } else if (newVal <= this.value && this.leftChild) {
      this.leftChild.insertNode(newVal);
    } else if (newVal <= this.value) {
      this.leftChild = new BSNode(newVal);
    } else {
      this.rightChild = new BSNode(newVal);
    }
  }
}

const Hbt = new BSNode("H");
Hbt.insertNode("E");
Hbt.insertNode("S");
Hbt.insertNode("G");
Hbt.insertNode("L");
Hbt.insertNode("Y");
Hbt.insertNode("I");

console.log(Hbt);
