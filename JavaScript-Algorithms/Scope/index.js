const bag = ["flashlight", "medicine"];
const moreItems = ["tent", "water bottle", "knife", "rope"];

if (bag.length < 3) {
  const nextItem = moreItems[0];
  bag.push(nextItem);
}

console.log(bag);
// console.log("Added " + nextItem); // nextItem out of scope - ReferenceError:

let height = 1.73;

const grow = function () {
  height += 0.1;
};

grow();
console.log(height);

// Reference Error -> not in scope
// const getBaseHeight = function () {
//   const height = 1.73;
//   return height;
// };

// const grow = function () {
//   height += 0.1;
// };

// grow();

var greeter = "hey hi";
var greeter = "say Hello instead";

let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello); // "say Hello instead"
}
// ReferenceError: hello is not defined
//console.log(hello); // hello is not defined

const names = ["Allison", "Beatrice", "Charles"];

for (let n of names) {
  let coolName = "cool " + n;
  console.log(coolName);
}
// ReferenceError: coolName is not defined
// console.log(coolName); // throws an error
