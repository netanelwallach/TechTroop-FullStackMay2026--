const isEven = function (number) {
  return number % 2 == 0;
};

const evenArr = function (arr) {
  let result = [];
  for (const element of arr) {
    if (isEven(element)) {
      result.push(element);
    }
  }
  return result;
};

console.log(evenArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
