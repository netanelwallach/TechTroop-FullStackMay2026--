import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

console.log("--- User Registration System --- \n");

rl.question("Enter your name: ", (name) => {
  rl.question("Enter your email: ", (email) => {
    rl.question("Enter your age: ", (age) => {
      rl.question("Enter your favorite color: ", (favoriteColor) => {
        rl.close();

        console.log("\nRegistration Summary:");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Age: ${age}`);
        console.log(`Favorite Color: ${favoriteColor}`);
      });
    });
  });
});
