// let people = [];

// let p1 = {
//   id: "a0x3",
//   name: "Candice",
//   age: 23,
// };

// let p2 = {
//   id: "q113z",
//   name: "Jay",
//   age: 16,
// };

// let p3 = {
//   id: "kl991",
//   name: "Drew",
//   age: 31,
// };

// people.push(p1);
// people.push(p2);
// people.push(p3);

// const findPerson = function (personID) {
//   for (let p of people) {
//     if (p.id === personID) {
//       return p;
//     }
//   }
// };

// const updatePerson = function (personID, newName) {
//   let person = findPerson(personID);
//   person.name = newName;
// };

// const removePerson = function (personID) {
//   for (let p in people) {
//     if (people[i].id === personID) {
//       return people.splice(i, 1);
//     }
//   }
// };

let people = {};

const doSomething = function (arr) {
  console.log(arr[0] + arr[37]);
};

//insert: O(1)
people["a0x3"] = { name: "Candice", age: 23 };
people["q113z"] = { name: "Jay", age: 16 };
people["kl1991"] = { name: "Drew", age: 31 };

//find: O(1)
const findPerson = function (personID) {
  return people[personID];
};

//update: O(1)
const updatePerson = function (personID, newName) {
  return (people[personID].name = newName);
};

//remove: O(1)
const removePerson = function (personID) {
  delete people[personID];
};

const findOver18 = function () {
  return people.filter((p) => p.age > 18);
};

typeof "hello, world!"; //returns 'string'
typeof 1337; //returns 'number'
typeof true; //returns 'boolean'
typeof { name: "Frenkel" }; //returns 'object'

// let stuff = ["hat", "iron", "bag", "lamp"];

// stuff.push("shoe");
// stuff.length;

let stuff = [];
stuff.push("boat");

// let stuff = new Array();
// stuff.push("boat");

class SillyArray {
  constructor() {
    this.sillyStuff = [];
    this.sillyLength = 0;
  }

  print() {
    console.log(this.sillyStuff);
  }

  push(stuff) {
    this.sillyStuff[this.sillyLength] = stuff;
    this.sillyLength++;

    this.sillyStuff[this.sillyLength] = stuff;
    this.sillyLength++;
  }

  annihilate() {
    this.sillyStuff = [];
  }
}

let myStuff = new SillyArray();
myStuff.push("Roger");
console.log(myStuff.sillyLength); //prints 2
myStuff.print(); //prints ["Roger", "Roger"]
myStuff.push("Rabbit");
console.log(myStuff.sillyLength); //prints 4
myStuff.print(); //prints [ 'Roger', 'Roger', 'Rabbit', 'Rabbit' ]
myStuff.annihilate();
myStuff.print(); // prints []
