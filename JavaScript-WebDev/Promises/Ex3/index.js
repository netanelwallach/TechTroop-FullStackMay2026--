// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 500ms (simulating database check)

    setTimeout(() => {
      const missingOrOutOfStock = [];
      // 2. Checks if all items are in stock
      items.forEach((key) => {
        if (!(key in inventory) || inventory[key].stock <= 0) {
          missingOrOutOfStock.push(key);
        }
      });
      // 3. Resolves with items if all available
      if (missingOrOutOfStock.length === 0) {
        resolve(items);
      }
      // 4. Rejects with specific item that's out of stock
      else {
        reject(`Out of stock: ${missingOrOutOfStock.join(", ")}`);
      }
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 200ms
    setTimeout(() => {
      let total;
      let tax;
      let subTotal;
      // 2. Calculates total price including 8% tax
      subTotal = items.reduce((sum, i) => (sum += inventory[i].price), 0);
      tax = subTotal * 0.08;
      total = subTotal + tax;
      let result = { subTotal, tax, total };
      // 3. Resolves with { subtotal, tax, total }
      if (result !== null) {
        resolve(result);
      } else {
        reject(new Error("calculateTotal failed"));
      }
    }, 200);
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 1500ms (simulating payment processing)
    setTimeout(() => {
      // 2. 90% success rate
      if (Math.random() >= 0.1) {
        const transactionId = new Date().getMilliseconds();
        let result = { transactionId, amount };
        result.status = "success";
        // 3. Resolves with { transactionId, amount, status: 'success' }
        resolve(result);
        // 4. Rejects with payment failure error
      } else {
        reject(new Error("Failed to process payment"));
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  return new Promise((resolve, reject) => {
    // 1. Waits 300ms
    setTimeout(() => {
      // 2. Reduces stock for each item
      items.forEach((item) => {
        inventory[item].stock -= 1;
      });
      // 3. Resolves with updated inventory status
      resolve({ ...inventory });
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
  return checkInventory(itemNames)
    .then((verifiedItems) => {
      return calculateTotal(verifiedItems).then((billingDetails) => {
        return { verifiedItems, billingDetails };
      });
    })
    .then((context) => {
      return processPayment(context.billingDetails.total).then(
        (paymentResult) => {
          return { ...context, paymentResult };
        },
      );
    })
    .then((context) => {
      return updateInventory(context.verifiedItems).then((updatedInventory) => {
        return {
          orderStatus: "completed",
          transactionId: context.paymentResult.transactionId,
          amountPaid: context.paymentResult.amount,
          items: context.verifiedItems,
          remainingStock: updatedInventory,
        };
      });
    })
    .catch((error) => {
      if (typeof error === "string") {
        throw new Error(error);
      }
      throw error;
    });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
