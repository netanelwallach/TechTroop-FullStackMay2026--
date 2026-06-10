const { isEven, removeAtLeastOne, implify, validate } = require(".");

test("isEven should return true for 58", () => {
  expect(isEven(58)).toBeTruthy();
});

test("removeAtLeastOne should remove at least one element from the array `arr`", () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const size = arr.length;
  let arr2 = removeAtLeastOne(arr);
  const size2 = arr2.length;
  expect(size2).toBeLessThan(size);
});

test("implify should return a clean string without these symbols: ! # . , ' ", () => {
  let str = "a!b#c.d,e'f";
  let str2 = implify(str);
  expect(str2).not.toContain("!");
  expect(str2).not.toContain("#");
  expect(str2).not.toContain(".");
  expect(str2).not.toContain(",");
  expect(str2).not.toContain("'");
});

test("validate should verify that there is at least one boolean in the array", () => {
  let arr = [1, 2, 3, false, 5, 6];
  expect(validate(arr)).toBeFalsy();
});

// Ex5
test("should return false for positive odd numbers", () => {
  expect(isEven(1)).toBe(false);
});

test("should throw when input is a string", () => {
  expect(() => removeAtLeastOne("abc")).toThrow();
});

test("throws when input is not a string", () => {
  expect(() => implify(null)).toThrow();
});

test("throws when input is not an array", () => {
  expect(() => validate(25)).toThrow();
});
