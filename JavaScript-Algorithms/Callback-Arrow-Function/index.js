// let users = [];
//
// const getData = function () {
//   users = [{ name: "Rick" }, { name: "Morty" }];
//   console.log("Got users");
// };
//
// const getData = function () {
//   setTimeout(function () {
// users = [{ name: "Rick" }, { name: "Morty" }];
// console.log("Got users");
//   }, 3000);
// };
//
// const displayData = function () {
//   console.log("Going to display users");
//   for (user of users) {
// console.log(user.name);
//   }
// };
//
// getData();
// displayData();
//
// const first = function () {
//   setTimeout(function () {
//     console.log("should be first");
//   }, 3000);
// };

// const first = function (callback) {
//   //receive the function as a parameter
//   setTimeout(function () {
//     console.log("should be first");
//     callback(); //this is the `second` function being invoked
//   }, 3000);
// };

// const second = function () {
//   console.log("should be second");
// };

// first(second); //pass the second function to the first, as an argument

// // second();

// let users = [];

// const getData = function (callback) {
//   setTimeout(function () {
//     users = [{ name: "Rick" }, { name: "Morty" }];
//     console.log("Got users");
//     callback();
//   }, 3000);
// };

// const displayData = function () {
//   console.log("Going to display: " + users);
//   for (user of users) {
//     console.log(user.name);
//   }
// };

// getData(displayData);
// // displayData();

// const timer = function () {
//   console.log(new Date());
// };

//setInterval(function () {
//  console.log(new Date());
//}, 1000);

// const greet = () => {
//   console.log("Hello there");
// };

// const greet = function() {
//   console.log("Hello there")
// }
// const greet = (name) => {
//   console.log("Hello there, " + name);
// };

//greet("Jolene"); //prints "Hello there, Jolene"

// const greet = (name) => console.log("Hello there, " + name);

// greet("Jolene"); //prints "Hello there, Jolene"

const greet = (name) => console.log("Hello there, " + name);

greet("Jolene"); //prints "Hello there, Jolene"

const square = (num) => console.log(num * num);

square(4); // should print 16

// const add = (x, y) => {
//   return x + y;
// };

// const sum = add(1, 2);
// console.log(sum); //prints 3

const add = (x, y) => x + y;

const sum = add(1, 2);
console.log(sum); //prints 3

const getHypotenuse = (a, b) => {
  const aSquared = a * a;
  const bSquared = b * b;
  const cSquared = aSquared + bSquared;
  return Math.sqrt(cSquared);
};

const hypoteneuese = getHypotenuse(3, 4);
console.log(hypoteneuese); //prints 5

const getFormalTitle = (title, name) => title + " " + name;

formalTitle = getFormalTitle("Madamme", "Lellouche");
console.log(formalTitle); //returns "Maddame Lellouche"

// const suspenseBuilder = {
//   name: "El Mysterio",
//   displayName: function () {
//     console.log("You are going to see the name in 3 seconds...");

//     setTimeout(function () {
//       //normal function
//       console.log("The name is: " + this.name);
//     }, 3000);
//   },
// };

// suspenseBuilder.displayName();

const suspenseBuilder = {
  name: "El Mysterio",
  displayName: function () {
    console.log("You are going to see the name in 3 seconds...");

    setTimeout(() => {
      //this is the change
      console.log("The name is: " + this.name);
    }, 3000);
  },
};

suspenseBuilder.displayName();
