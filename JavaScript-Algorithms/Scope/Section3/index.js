// What will console log? each specific served a ordedr and the Finished
// Will there be an error? no
// Why? all variables used in there scope
// Will something be undefined? not while used
// Why?
// To what scope does each variable belong? allOrders - global, orders - function, order - for loop, specialOrder - for loop
// Global or local? If local, to which specifically?

const serveOrders = function (orders) {
  for (let order of orders) {
    let specialOrder = "special " + order;
    console.log("Served a " + specialOrder);
  }

  console.log("Finished serving all the orders: " + orders);
};
const allOrders = ["fish", "lettuce plate", "curious cheese"];
serveOrders(allOrders);
