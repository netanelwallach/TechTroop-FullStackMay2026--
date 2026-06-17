import { BOOKSAPIKEY } from "../keys.js";
let queryType;
let queryValue;

function bookApi(queryType, queryValue) {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}&key=${BOOKSAPIKEY}`,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

queryType = "isbn";
queryValue = 9789814561778;
bookApi(queryType, queryValue);

queryType = "title";
queryValue = "How to Win Friends and Influence People";
bookApi(queryType, queryValue);
