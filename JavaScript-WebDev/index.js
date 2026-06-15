function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const diceResult = Math.floor(Math.random() * 6) + 1;

      const failCondition = Math.random();

      if (failCondition < 0.1) {
        reject(new Error("The dice fell from the table!"));
      } else {
        resolve(diceResult);
      }
    }, 500);
  });
}

rollDice()
  .then((result) => console.log(`You rolled a ${result}`))
  .catch((error) => console.error(`Roll failed: ${error.message}`));

function oldAsyncFunction(callback) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(null, "Success");
    } else {
      callback(new Error("Failed"));
    }
  }, 1000);
}

function oldAsyncFunctionPromise() {
  return new Promise((resolve, reject) => {
    oldAsyncFunction((err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
}

oldAsyncFunctionPromise()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("Error caught:", error.message);
  });
