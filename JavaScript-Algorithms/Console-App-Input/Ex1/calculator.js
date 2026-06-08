const [, , num1, operation, num2] = process.argv;

if (!num1 || !operation || !num2) {
  console.error("Error: Missing arguments.");
  console.error("Usage: node calc.js <number1> <operation> <number2>");
  console.error("Example: node calculator.js 5 + 3");
  process.exit(1);
}

const number1 = Number(num1);
const number2 = Number(num2);

if (isNaN(number1) || isNaN(number2)) {
  console.error("Error: Both parameters must be valid numbers.");
  process.exit(1);
}

let result;

if (operation === "+") {
  result = number1 + number2;
} else if (operation === "-") {
  result = number1 - number2;
} else if (operation === "*" || operation === "x") {
  result = number1 * number2;
} else if (operation === "/") {
  if (number2 === 0) {
    console.error("Error: Division by zero is not allowed.");
    process.exit(1);
  }
  result = number1 / number2;
} else {
  console.error(`Error: Invalid operation "${operation}". Use +, -, *, or /.`);
  process.exit(1);
}

console.log(`Result: ${number1} ${operation} ${number2} = ${result}`);
