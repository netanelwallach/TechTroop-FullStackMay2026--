//javascript, jQuery
import { GIPHYKEY } from "../keys.js";

var xhr = $.get(
  `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${GIPHYKEY}&limit=5`,
);
xhr.done(function (response) {
  const results = [];

  if (response && response.data) {
    response.data.forEach((dataItem) => {
      const embed_url = dataItem.embed_url;
      results.push(embed_url);
    });
  }

  console.log("success got data", results);
  const giphyFrame = document.getElementById("giphyFrame");
  giphyFrame.src = results[0];
});
