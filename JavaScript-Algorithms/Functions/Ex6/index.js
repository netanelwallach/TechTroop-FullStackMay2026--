const armstronNumber = function (number) {
  let digits = [];
  let size = 0;
  let result = 0;
  let modifiedNum = number;

  while (modifiedNum != 0) {
    const digit = modifiedNum % 10;
    digits.push(digit);
    modifiedNum = Math.floor(modifiedNum / 10);
    size += 1;
  }

  for (let i = 0; i < digits.length; i++) {
    const element = digits[i];
    result += Math.pow(element, size);
  }

  return result == number ? true : false;
};

for (let j = 100; j < 1000; j++) {
  if (armstronNumber(j)) {
    console.log(j);
  }
}
