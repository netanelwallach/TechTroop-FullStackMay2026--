const { isEven } = require(".");

test("isEven should return true for 58", () => {
  expect(isEven(58)).toBeTruthy();
});
