import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

console.log("--- User Registration System --- \n");

// Sequential questions
const name = await rl.question("Enter your name: ");
const email = await rl.question("Enter your email: ");
const age = await rl.question("Enter your age: ");
const favoriteColor = await rl.question("Enter your favorite color: ");

rl.close(); // Closes the interface immediately after gathering input

// Summary output
console.log("\nRegistration Summary:");
console.log(`Name: ${name}`);
console.log(`Email: ${email}`);
console.log(`Age: ${age}`);
console.log(`Favorite Color: ${favoriteColor}`);

// no Error handling the code
