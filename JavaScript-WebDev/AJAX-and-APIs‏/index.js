import $ from "jquery";

// Initialize the HTTP request to a server located at "someURL"
// var xhr = new XMLHttpRequest();
// xhr.open("get", "/someURL");

// // Track the state changes of the request.
// xhr.onreadystatechange = function () {
//   var DONE = 4; // readyState 4 means the request is done.
//   var OK = 200; // status 200 is a successful return.
//   if (xhr.readyState === DONE) {
//     if (xhr.status === OK) {
//       console.log(xhr.responseText); // 'This is the returned text.'
//     } else {
//       console.log("Error: " + xhr.status); // An error occurred during the request.
//     }
//   }
// };

// Send the request to send-ajax-data.php
// xhr.send(null);

// $.get("https://www.google.com", function (result) {
//   console.log(result);
// });

// // cannot do something like this
// let data = $.get("/some_api");

// $.get(
//   "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   function (result) {
//     console.log(result);
//   },
// );

// let person = { name: "Kyle", age: 37 };
// let expectedYearsLeft = 120 - person.age;

// console.log(`${person.name} has ${expectedYearsLeft} years to live`); //prints Kyle has 83 years to live

// let person;
// setTimeout(function () {
//   person = { name: "Kyle", age: 37 };
// }, 1000);

// let expectedYearsLeft = 120 - person.age;

// console.log(`${person.name} has ${expectedYearsLeft} to live`);

//request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function (users) {
//   //extract the geo data of the first user

//   let lat = users[0].address.geo.lat;
//   let long = users[0].address.geo.lng;

//   //log the data
//   console.log(`${lat}, ${long}`); //prints -37.3159, 81.1496
// });

// $.ajax({
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   success: function (data) {
//     console.log(data);
//   },
// });

// const useData = function (data) {
//   console.log(data);
// };

// $.ajax({
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521",
//   success: useData,
// });
