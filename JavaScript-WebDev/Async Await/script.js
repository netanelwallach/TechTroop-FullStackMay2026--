import { BOOKSAPIKEY } from "../keys.js";

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

async function processOrderAsync(orderId) {
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

// client side
const API_URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521&&key=${BOOKSAPIKEY}`;

const fetchData = function () {
  $.get(API_URL, function (res) {
    console.log(res.items[0]);
  });
};

// server side
const fetchData = function (surname) {
  Person.find({ lastName: surname }, function (err, people) {
    console.log(people);
  });
};

const fetchDatum = async function () {
  let data = await $.get(API_URL);
  console.log(data.items[0]);
};

// This is fine!
class ApiManager {
  constructor(stocksAPI, renderer) {
    this.stocksAPI = stocksAPI;
    this.renderer = renderer;
  }

  async fetchStockData(ticker) {
    let stockData = await $.get(`${this.stocksAPI}/${ticker}`);
    this.renderer.render(stockData);
  }
}

// This is bad. The rule says that all async functions return a promise, no matter what -
// therefore the value of result will be a Promise, and not the result from the GET request,
// even though we used await. The await only applies to the scope of the function.
const getData = async function () {
  let data = await $.get("/data");
  return data;
};

const result = getData();

// This is bad. The rule says that you can only use await on then able operations.
// The request module in Node does not return a promise, therefore we cannot use await here.
const nbaFetcher = async function () {
  let nbaData = await request("/nbaAPI");
  console.log(nbaData);
};

nbaFetcher();

const requestBankInfo = async function () {
  let info = await $.get("/bankAPI");
  return info;
};

// This is bad. The rule says that you cannot use await outside of an async function
let bankInfo = await requestBankInfo();

// Technically, this is fine.But! The problem with the above is that it will slow down your code -
// this is because every line has to finish executing (i.e. the whole GET request must finish)
// before moving on to the next line.
// But the whole point of writing asynchronous code is the ability to do things simultaneously.
// In the example, the Facebook data doesn't depend on the Twitter data -
// there's no reason for the second request to wait for the first to finish.
// This would be better to execute with promises/callbacks.
const loadAllUserData = async function (user) {
  let twitterData = await $.get("/twitter/" + user.name);
  let facebookData = await $.get("/facebook/" + user.name);
  let linkedinData = await $.get("/linkedin/" + user.name);

  render({
    twitter: twitterData,
    fb: facebookData,
    li: linkedinData,
  });
};

// Yes sweet mother of Moses - this is a perfect usecase for async / await -
// the bookApi does depend on the titleAPI to finish, so the second request
// does need to wait for the first to finish. Excellent.
const loadBook = async function (title) {
  let bookISBN = await $.get("/titleAPI/" + title);
  let bookData = await $.get("/bookApi/" + bookISBN);

  render(bookData);
};

loadBook();
