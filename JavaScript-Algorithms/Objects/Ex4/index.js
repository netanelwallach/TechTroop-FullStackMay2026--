const date = 3;

const kitchen = {
  owner: "Geraldine",
  //   hasOven: true / false, // choose one
  hasOven: false,
  fridge: {
    price: 500,
    // works: true / false, // choose one
    works: false,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 },
    ],
  },
};

const hasOven = kitchen.hasOven;
const works = kitchen.fridge.works;
const radish = kitchen.fridge.items[1].name;

let str =
  "Geraldine's " +
  radish +
  " expired " +
  (date - kitchen.fridge.items[1].expiryDate) +
  " day ago. ";
let fixStr = "";

if (works) {
  str += "Weird, considering her fridge works. ";
} else {
  str += "Probably because her fridge doesn't work. ";
  fixStr +=
    " And she'll have to pay " +
    kitchen.fridge.price / 2 +
    " to fix the fridge.";
}
if (hasOven) {
  str += "Luckily, she has an oven to cook the " + radish + " in.";
} else {
  str += "Too bad she doesn't have an oven to cook the " + radish + " in.";
}

console.log(str + fixStr);
