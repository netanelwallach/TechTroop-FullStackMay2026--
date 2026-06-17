function processOrder(orderId) {
  return fetch(`/api/orders/${orderId}`)
    .then((response) => response.json())
    .then((order) => {
      return fetch(`/api/inventory/${order.productId}`);
    })
    .then((response) => response.json())
    .then((inventory) => {
      if (inventory.stock > 0) {
        return { success: true, message: "Order processed" };
      } else {
        return { success: false, message: "Out of stock" };
      }
    });
}

async function processOrder(orderId) {
  const orderResponse = await fetch(`/api/orders/${orderId}`);
  const order = await orderResponse.json();

  const inventoryResponse = await fetch(`/api/inventory/${order.productId}`);
  const inventory = await inventoryResponse.json();

  if (inventory.stock > 0) {
    return { success: true, message: "Order processed" };
  } else {
    return { success: false, message: "Out of stock" };
  }
}

//   try {
//   } catch (error) {
//     // Handle network or parsing failures
//     return {
//       success: false,
//       message: `Error processing order: ${error.message}`,
//     };
