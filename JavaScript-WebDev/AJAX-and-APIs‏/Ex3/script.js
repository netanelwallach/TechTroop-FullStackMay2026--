import { BOOKSAPIKEY } from "../keys.js";
let queryType;
let queryValue;

function bookApi(queryType, queryValue) {
  fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}&key=${BOOKSAPIKEY}`,
  )
    .then((response) => response.json())
    .then((result) => {
      if (!result.items || result.items.length === 0) {
        console.log("No books found.");
        return;
      }
      let details = [];
      let book;

      result.items.forEach((item) => {
        const volumeInfo = item.volumeInfo;

        const title = volumeInfo.title || "No Title Available";
        const authors = volumeInfo.authors
          ? volumeInfo.authors.join(", ")
          : "Unknown Author";

        let isbn = "No ISBN Available";
        if (volumeInfo.industryIdentifiers) {
          const isbnIdentifier = volumeInfo.industryIdentifiers.find(
            (id) => id.type === "ISBN_13" || id.type === "ISBN_10",
          );
          if (isbnIdentifier) {
            isbn = isbnIdentifier.identifier;
          }
        }
        book = { title, authors, isbn };
        details.push(book);
      });

      console.log(details);
    });
}

queryType = "isbn";
queryValue = 9789814561778;
bookApi(queryType, queryValue);

queryType = "title";
queryValue = "How to Win Friends and Influence People";
bookApi(queryType, queryValue);
