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

  findNode(value) {
    if (this.value === value) {
      console.log("true");
      return true;
    } else if (value > this.value && this.rightChild) {
      return this.rightChild.findNode(value);
    } else if (value <= this.value && this.leftChild) {
      return this.leftChild.findNode(value);
    } else {
      console.log("false");
      return false;
    }
  }

  findCommonParent(valA, valB) {
    if (valA < this.value && valB < this.value) {
      return this.leftChild.findCommonParent(valA, valB);
    }

    if (valA > this.value && valB > this.value) {
      return this.rightChild.findCommonParent(valA, valB);
    }

    console.log(this.value);
    return this.value;
  }
}

letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

let bSTree = new BSNode();

letters.forEach((l) => bSTree.insertNode(l));

bSTree.findCommonParent("B", "I"); //should return "H"
bSTree.findCommonParent("B", "G"); //should return "E"
bSTree.findCommonParent("B", "L"); //should return "J"
bSTree.findCommonParent("L", "Y"); //should return "R"
bSTree.findCommonParent("E", "H"); //should return "J"
