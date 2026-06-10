const { isEven, removeAtLeastOne } = require(".");

test("isEven should return true for 58", () => {
  expect(isEven(58)).toBeTruthy();
});

test("removeAtLeastOne should return an array that is smaller at least in one from the origianl array", () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const size = arr.length;
  let arr2 = removeAtLeastOne(arr);
  const size2 = arr2.length;
  expect(size2).toBeLessThan(size);
});
