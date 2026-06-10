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

  removeNode(parent, value) {
    let right = this.rightChild;
    let left = this.leftChild;

    // run recursive - left or right according to the value - return false if it is not in the tree
    if (value < this.value) {
      if (left !== null && left !== undefined) {
        left.removeNode(this, value);
      }
    } else if (value > this.value) {
      if (right !== null && right !== undefined) {
        right.removeNode(this, value);
      }
    }
    // value found - handle remove
    else {
      //case the are two sons
      if (
        left !== null &&
        left !== undefined &&
        right !== null &&
        right !== undefined
      ) {
        // max left will replace
        let maxChild = left;
        // find max on left branch
        while (
          maxChild.rightChild !== null &&
          maxChild.rightChild !== undefined
        ) {
          maxChild = maxChild.rightChild;
        }
        // replace values and remove recursive on this branch for no duplicates
        this.value = maxChild.value;
        left.removeNode(this, maxChild.value);
      }
      // case there is one son or none
      else {
        let child;
        if (left !== null && left !== undefined) {
          child = left;
        } else {
          child = right;
        }
        if (parent !== null && parent !== undefined) {
          // update parent's reference ro children - either left or right
          if (parent.leftChild === this) {
            parent.leftChild = child;
          } else if (parent.rightChild === this) {
            parent.rightChild = child;
          }
          // case we on deleting root (parent - null)
        } else {
          // if there is a child - he replaces root
          if (child !== null && child !== undefined) {
            this.value = child.value;
            this.leftChild = child.leftChild;
            this.rightChild = child.rightChild;
          }
          // there is no children
          else {
            this.value = null;
          }
        }
      }
    }
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach((n) => nodeWithOneChild.insertNode(n));
console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9)); // will return tree like the first image (the 9 will be deletied)
console.log(nodeWithOneChild);

let nodeWithTwoChildren = new BSNode();
numbers.forEach((n) => nodeWithTwoChildren.insertNode(n));
console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)); // will return tree like the second image (the root will be 5)
console.log(nodeWithTwoChildren);
