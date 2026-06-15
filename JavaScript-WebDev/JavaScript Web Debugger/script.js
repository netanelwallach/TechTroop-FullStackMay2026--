function foo() {
  let sum = 0;
  for (let i = 1000; i < 2000; i++) {
    if (i % 203 === 0) {
      sum += getSecondDigit(i);
    } else if (i % 497 === 0) {
      sum += getLastDigit(i);
    } else if (i % 293 === 0) {
      sum += getLastDigit(i * 13);
    }
  }
  return sum;
}

function getSecondDigit(number) {
  return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
  return parseInt(number.toString().split("")[number.length - 1]);
}

foo();

// Is there a time when getSecondDigit is being called with the number 1623 as a parameter? NO - It's called with 1624
// How many times getLastDigit is being called when i % 293 === 0? 1. 1172 2. 1465 3. 1758
// Is there a time when getLastDigit is being called with a number parameter that has 1 as it's last digit? what is the value of that number parameter? Yes - 1491
