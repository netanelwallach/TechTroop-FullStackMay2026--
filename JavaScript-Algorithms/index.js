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
//Don't
function isItMorning(time) {
  if (time > 6) {
    if (time < 12) {
      return true;
    }
  }
  return false;
}
// Don't 
function isItMorning(time){
    if(time < 6){
        continue
    }else{
        if(time <12){
            return true
            }
    }
    return false
}
// Do!!
function isItMorning(time){
    if(time > 6 && time < 12){
            return true
    }
    return false
}
