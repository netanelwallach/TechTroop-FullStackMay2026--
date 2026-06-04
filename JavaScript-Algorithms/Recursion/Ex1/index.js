const findFactorial = function (num) {
  //Your code here
  if (num == 1) {
    return num;
  } else {
    return num * findFactorial(num - 1);
  }
};

console.log(findFactorial(5));

const findFactorial2 = function (num, sum = 1) {
  //Your code here
  if (num == 1) {
    return sum;
  } else {
    return num * findFactorial(num - 1);
  }
};

console.log(findFactorial2(5));
