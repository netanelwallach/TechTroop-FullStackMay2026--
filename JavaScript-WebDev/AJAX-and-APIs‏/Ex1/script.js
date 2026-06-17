const isbn = "0439023521";
import { BOOKSAPIKEY } from "../keys.js";

function bookApi() {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${BOOKSAPIKEY}`,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

bookApi();
