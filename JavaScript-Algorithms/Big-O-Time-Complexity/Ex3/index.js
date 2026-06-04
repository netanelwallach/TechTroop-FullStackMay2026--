const allSides = [
  { a: 3, b: 4 },
  { a: 15, b: 21 },
  { a: 41, b: 8 },
  { a: 12, b: 6 },
];

const getHype = function (sides) {
  let a = sides.a;
  let b = sides.b;
  let sumOfSquares = a * a + b * b;
  return Math.sqrt(sumOfSquares);
};

const relevantSides = allSides.filter((s) => s.a % 3 == 0);
for (let sides of relevantSides) {
  console.log(getHype(sides));
}

// Complexity - O(n)
