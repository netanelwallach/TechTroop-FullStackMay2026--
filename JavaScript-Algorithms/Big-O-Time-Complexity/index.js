const printAll = function (arr) {
  for (let e of arr) {
    console.log(e);
  }
};

const printFirst = function (arr) {
  console.log(arr[0]);
};

const doSomething = function (arr) {
  console.log(arr[0] + arr[37]);
};

const findPerson = function (people, id) {
  for (let p of people) {
    if (p.id === id) {
      return p;
    }
  }
};

const bagpack = {
  food: {
    apple: 2,
    bread: 1,
    cheese: 3,
  },
  officeSupplies: {
    pencil: 5,
    ruler: 1,
  },
  gadgets: {
    phone: 1,
    laptop: 1,
  },
};

const getFromBag = function (category, item) {
  if (bagpack[category]) {
    let foundItem = bagpack[category][item];
    return foundItem ? foundItem : { err: "Item not found" };
  }

  return { err: "Category not found" };
};

const books = {
  A: [
    { title: "Alchemist", author: "Pablo" },
    { title: "Asmiov's Tales", author: "Issac Asimov" },
    { title: "Analysis of Apes", author: "Jane Goodall" },
  ],
  B: [
    { title: "Best of Meryl Streep Scripts", author: "Madamme Streep" },
    { title: "Boyhood, a Story", author: "Childish Gambino" },
  ],
  //...,
  N: [
    { title: "Name of the Wind", author: "Patrick Rothfuss" },
    { title: "Nostradamus: Revelations", author: "Dalinar Kholin" },
  ],
  //etc
};

const findBook = function (bookName) {
  let letter = bookName[0];
  let booksStartingWithLetter = books[letter];
  for (let book of booksStartingWithLetter) {
    if (book.title == bookName) {
      return book;
    }
  }
};

const findBookAndPrint = function (bookName) {
  let letter = bookName[0];
  let booksStartingWithLetter = books[letter];

  booksStartingWithLetter.forEach((b) => console.log(b.title));

  for (let book of booksStartingWithLetter) {
    if (book.title == bookName) {
      return book;
    }
  }
};

const findDuplicates = function (ages) {
  for (let i = 0; i < ages.length; i++) {
    for (let j = i + 1; j < ages.length; j++) {
      if (ages[i] === ages[j]) {
        console.log(`${ages[i]} has a duplicate`);
      }
    }
    //note that this *entire* inner loop runs for each iteration of i
  }
};

let professors = ["Jordana", "Daliah", "Seamus"];

const greetProfessors = function (kids) {
  for (let kid of kids) {
    for (let p of professors) {
      console.log(`${kid} greets Professor ${p}`);
    }
  }
};

const employers = [
  { name: "Microsoft", positions: 3 },
  { name: "Tesla", positions: 0 },
  { name: "Apple", positions: 14 },
];
const removeYouth = (people) => people.filter((p) => p.age < 18);
const employ = (person, employer) => {
  person.hasJob = true;
  employer.positions -= 1;
};

const determineEmployment = function (people) {
  removeYouth(people).forEach((p) => {
    employers.forEach((e) => {
      console.log(`${p.name} applied for a job at ${e.name}`)(
        e.positions > 0 && !p.hasJob,
      )
        ? employ(p, e)
        : null;
    });
  });
};

let numbers = [
  24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427,
  442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852,
  896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272,
  1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667,
  1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198,
  2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554,
  2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932,
  2962, 2984, 2987,
];

const findIndex = function (desiredNumber) {
  for (let i in numbers) {
    if (numbers[i] === desiredNumber) {
      return i;
    }
  }
};

console.log("The index is " + findIndex(2630));
