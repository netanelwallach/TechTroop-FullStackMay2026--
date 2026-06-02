let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9];

// let olderThan16 = [];
// for (let age of ages) {
//   if (age > 16) {
//     olderThan16.push(age);
//   }
// }

// let olderThan16 = ages.filter((a) => a > 16);

const isGreaterThan16 = function (age) {
  return age > 16;
};

let olderThan16 = ages.filter(isGreaterThan16); //notice that passing in the function will implicitly pass it the `a` parameter that the function expects

console.log(olderThan16); // prints [41, 32, 27, 18, 19, 19, 58, 41]

let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
];

let oranges = vegetables.filter((v) => v.color === "orange");
console.log(oranges);

oranges.forEach((ov) => console.log(ov.name));

let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

const increaseSalary = (person) =>
  person.goodPerformance ? (person.salary += 300) : person.salary;

for (let i = 0; i < people.length; i++) {
  increaseSalary(people[i]);
}

people.forEach((p) => console.log(p.salary)); //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

let poundWeights = [142, 180, 178, 121, 132];

let kiloWeights = poundWeights.map((pw) => Math.round(pw / 2.2));
console.log(kiloWeights); //prints [65, 82, 81, 55, 60]

let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
];

let calmMessages = messagesFromDad.map((m) => m.toLowerCase());
console.log(calmMessages);

let users = [
  {
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
  },
  {
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
  },
];

let users2 = users.map((u) => {
  return { name: u.name, city: u.address.city };
});

console.log(users2);

let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
];

// const findById = function (id) {
//   for (let post of posts) {
//     if (post.id == id) {
//       return post;
//     }
//   }
// };

const findById = (id) => posts.find((p) => p.id === id);
console.log(findById(1)); // prints {id: 1, text: "Find me", comments: Array(3)}

const findCommentByID = (postID, commentID) =>
  findById(postID).comments.find((c) => c.id === commentID);

console.log(findCommentByID(1, 0));

let ages2 = [31, 28, 23, 27, 25, 16, 24];
ages2.every((a) => a > 18); //returns false

let menu = [
  { name: "Beef stew", vegetarian: false },
  { name: "Beef sandwhich", vegetarian: false },
  { name: "Carrot on a stick", vegetarian: true },
  { name: "Beef eggroll", vegetarian: false },
];

menu.some((m) => m.vegetarian); //returns true

let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];

console.log(
  movies.some((m) => m.studio === "Marvel")
    ? "Let's go watch some movies"
    : "Let's stay home",
);

console.log(movies.every((m) => m.year > 2020) ? "Futuristic stuff" : "Yawn");

let prices = [12.99, 8.5, 23.75, 4.25, 16.0];

let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // prints 65.49

let scores = [87, 92, 78, 95, 88, 91];
let large = scores.reduce(
  (max, score) => (score > max ? score : max),
  scores[0],
);
console.log(large);

let votes = ["pizza", "tacos", "pizza", "burgers", "pizza", "tacos", "salad"];

let voteCounts = votes.reduce((counts, vote) => {
  counts[vote] = (counts[vote] || 0) + 1;
  return counts;
}, {});
// Result: { pizza: 3, tacos: 2, burgers: 1, salad: 1 }

let countries = [
  { name: "Greece", population: 500 },
  { name: "Namibia", population: 1200 },
  { name: "Finland", population: 100 },
  { name: "Switzerland", population: 300 },
  { name: "Peru", population: 200 },
];

let smallCountries = countries
  .filter((c) => c.population < 500)
  .map((c) => c.name);
