let numbers = [3, 7, 20, 1, 1, 8, 2];
const sum = function (numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }

  return sum;
};

sum(numbers);

const sumR = function (numbers, currentSum = 0) {
  if (numbers.length === 0) {
    return currentSum;
  }

  currentSum += numbers.splice(0, 1)[0];
  return sumR(numbers, currentSum);
};

sumR(numbers);
