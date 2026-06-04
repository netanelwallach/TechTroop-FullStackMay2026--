class UniqueArray {
  constructor() {
    this.uniqueArray = [];
    this.uniqueArrayLength = 0;
  }

  isPrimitive(value) {
    return (
      value === null ||
      (typeof value !== "object" && typeof value !== "function")
    );
  }

  add(item) {
    if (this.isPrimitive(item)) {
      if (this.uniqueArray.find((element) => element === item)) {
        return false;
      } else {
        this.uniqueArray.push(item);
        this.uniqueArrayLength++;
        return true;
      }
    } else {
      return false;
    }
  }
  showAll() {
    console.log(this.uniqueArray);
  }
  exists(item) {
    console.log(this.uniqueArray.includes(item));
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
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
