//should return true if n is even, false otherwise
const isEven = function (n) {
  return n % 2 == 0 ? true : false;
};

//should remove at least one element from the array `arr`
const removeAtLeastOne = function (arr) {
  let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
  arr.splice(0, numItemsToRemove);
  return arr;
};

//should return a clean string without these symbols: "!", "#", ".", ",", "'"
const implify = function (str) {
  let symbols = ["!", "#", ".", ",", "'"];
  return str
    .split("")
    .filter((c) => symbols.indexOf(c) == -1)
    .join("");
};

const validate = function (arr) {
  let flag = false;
  let falseCount = 0;
  let trueCount = 0;
  for (const element of arr) {
    if (typeof element === "boolean") {
      flag = true;
      if (element === true) {
        trueCount++;
      } else {
        falseCount++;
      }
    }
  }

  if (flag) {
    return trueCount > falseCount ? true : false;
  } else {
    return {
      error: "Need at least one boolean",
    };
  }
};

const add = function (x, y) {
  let stuff = [];
  stuff.push(x, y);
};

module.exports = {
  isEven,
  removeAtLeastOne,
  implify,
  validate,
  add,
};
