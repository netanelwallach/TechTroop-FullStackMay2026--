// const someModule = function () {
//   const _somethingPrivate = 3;
//   const exposePrivates = () => _somethingPrivate;

//   return;
//   {
//     exposePrivates: exposePrivates;
//   }
// };

// const m = someModule();
// console.log(m.exposePrivates()); //prints 3

// class Animal {
//   constructor(name, numLegs) {
//     this.name = name;
//     this.numLegs = numLegs;
//     this.children = [];
//   }

//   giveBirth(name) {
//     this.children.push(name);
//     console.log("Boom. Birthed " + name);
//   }
// }

// const cat = new Animal("Puss", 4);
// cat.giveBirth("Dolly"); // prints "Boom. Birthed Dolly"
// console.log(cat.children); // should print an array with 1 item: ["Dolly"]

// this = {}
// this.name = "Puss"
// // this.numLegs = 4
// const cat = this

// console.log(cat.name + " has " + cat.numLegs + " legs"); //prints "Puss has 4 legs"

// const dog = new Animal("Woof", 4);

// console.log(dog.name + " has " + dog.numLegs + " legs");

class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const human = new Human("Mark", 34, true);
// console.log(human);
console.log(
  `My name is ${human.name}, I am ${human.age} years old and I am ${human.isFriendly ? "friendly" : "not very friendly"} `,
);

class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel;
    Vehicle.carsSold++;
  }
  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }
  get speed() {
    return this._speed;
  }
  set fuel(fuel) {
    if (fuel < 0 || fuel > 150) {
      return console.log("Fuel must be between 0-150");
    }
    this._fuel = fuel;
  }
  get fuel() {
    return this._fuel;
  }
  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.");
  }
  static calculateMoney() {
    console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
  }
}
Vehicle.carsSold = 0;
const a = new Vehicle(1, 2, 3);
const b = new Vehicle(4, 5, 6);

Vehicle.getInfo();
Vehicle.calculateMoney();

const car = new Vehicle();
car.x = 3;
car.y = 1;
car.speed = 5;

console.log(car.x); //prints 3
console.log(car.y); //prints 1
console.log(car.speed); //prints 5

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined

c.speed = 10;
console.log(c.speed);

class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log("Added " + animal.name + " to the zoo");
  }

  showAnimals() {
    this.animals.forEach((a) => console.log(a.name));
  }
}

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
  }
}

const cat = new Animal("Puss", 4);
const zoo = new Zoo();

zoo.addAnimal(cat); // prints "Added Puss to the zoo"
zoo.showAnimals(); // prints "Puss"
