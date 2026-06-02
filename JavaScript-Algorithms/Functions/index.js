let a = 6;
let b = a;

console.log(a); //prints 6
console.log(b); //prints 6

b = 2;

console.log(a); //prints 6
console.log(b); //prints 2

const firstString = "car";
const secondString = "pet";
const bothStrings = firstString + secondString;

console.log(bothStrings);

console.log(3 < 5); // will output true
console.log(3 > 5); // will output false
console.log(2 >= 2); // will output true
console.log(1 <= -1); // will output  false
console.log("this string" == "that string"); // will output false

console.log(1 == "1"); // prints true
console.log(1 === "1"); // prints false

let num;
console.log(3 + num);

console.log(14 % 5); // will print 4

console.log(23 == "23");
console.log(41 === 41);
console.log("this string" == "this string");
console.log(972 % 2 == 0);

let startPosition;
let newPosition = (startPosition || 0) + 10;

console.log(newPosition); //prints 10
// //Don't
// function isItMorning(time) {
//   if (time > 6) {
//     if (time < 12) {
//       return true;
//     }
//   }
//   return false;
// }
// // Don't
// function isItMorning(time){
//     if(time < 6){
//         continue
//     }else{
//         if(time <12){
//             return true
//             }
//     }
//     return false
// }
// Do!!
function isItMorning(time) {
  if (time > 6 && time < 12) {
    return true;
  }
  return false;
}
let companies = ["Tesla", "Amazon", "Google", "Microsoft"];
const firstCompany = companies[0];
console.log(firstCompany); // prints "Tesla"
companies.push("Blizzard Entertainment");
// employees.push(...candidates);
// employees.push(candidates[0], candidates[1], candidates[2]);
companies.splice(1, 1);

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

console.log(capitalize("hello")); // "Hello"

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  // summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  // summary += //call function for profession
  // summary += //call function for country + city
  // summary += //call function for catchphrase
  return summary;
};

console.log(getSummary(people_info[0]));
