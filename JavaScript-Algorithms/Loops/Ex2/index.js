const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let index = 0; index < names.length; index++) {
  const name = names[index];
  const age = ages[index];
  const person = { name: name, age: age };
  people.push(person);
}

let str = "";
for (const person in people) {
  const element = people[person];
  str += element.name + " is " + element.age + " years old, ";
}

str = str.slice(0, -2) + ".";
console.log(str);
