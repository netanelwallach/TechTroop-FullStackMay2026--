// What will console log? No
// Will there be an error? found - Reference
// Why?
// Will something be undefined? No
// Why? No var
// To what scope does each variable belong? users - doesUserExist, u - for loop, found - if
// Global or local? If local, to which specifically?

const doesUserExist = function (name) {
  const users = [
    { name: "Shapira", age: 19 },
    { name: "Lucius", age: 23 },
  ];
  for (let u of users) {
    if (u.name == name) {
      const found = true;
    }
  }
  return found;
};

const userExists = doesUserExist("Lucius");
if (userExists) {
  console.log("We found the ragamuffin!");
} else {
  console.log("No idea where this person is.");
}
