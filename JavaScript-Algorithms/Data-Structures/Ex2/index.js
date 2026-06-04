class UniqueArray {
  constructor() {
    this.uniqueArray = [];
    this.uniqueArrayLength = 0;
  }

  // isPrimitive(value) {
  //   return (
  //     value === null ||
  //     (typeof value !== "object" && typeof value !== "function")
  //   );
  // }

  isEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (
      typeof obj1 !== "object" ||
      obj1 === null ||
      typeof obj2 !== "object" ||
      obj2 === null
    ) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length === keys2.length) {
      for (const key of keys1) {
        if (keys2.includes(key) && this.isEqual(obj1[key], obj2[key])) {
        } else {
          return false;
        }
      }
      return true;
    } else {
      return true;
    }
  }

  add(item) {
    // if (this.isPrimitive(item)) {
    if (this.exists(item)) {
      return false;
    } else {
      this.uniqueArray.push(item);
      this.uniqueArrayLength++;
      return true;
    }
  }
  //  else {
  //   return false;
  // }
  // }
  showAll() {
    console.log(this.uniqueArray);
  }

  exists(item) {
    const itemExists = this.uniqueArray.some((element) =>
      this.isEqual(element, item),
    );
    console.log(itemExists);
    return itemExists;
  }

  get(index) {
    if (index < 0 || index >= this.uniqueArrayLength) {
      return -1;
    } else {
      return this.uniqueArray[index];
    }
  }
}

const uniqueStuff = new UniqueArray();
uniqueStuff.add({ x: 1, y: 2 });
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add({ y: 2, x: 1 });
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists({ y: 2, x: 1 }); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
uniqueStuff.showAll();
// {x: 3} === {x: 3}

// {a: 1, b:2 }, {b:2, a:1}
