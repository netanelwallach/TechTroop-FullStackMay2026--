let p1 = {
  name: "Abraham Lincoln",
  age: 75,
  city: "New York",
};

let p2 = {
  name: "Josh Stewart",
  age: 36,
  city: "Washington",
};

if (p1.age === p2.age) {
  console.log(p1.name + "'s age is similar to " + p2.name + "'s age");
} else {
  console.log(p1.name + "'s age is diffenet from " + p2.name + "'s age");
}

if (p1.city === p2.city) {
  console.log("Jill wanted to date Robert");
} else {
  console.log("Jill wanted to date Robert, but couldn't");
}
