addEventListener("DOMContentLoaded", () => {
  randomJoke();

  function randomJoke() {
    const setup = document.querySelector("#setup");
    const punchline = document.querySelector("#punchline");
    const loader = document.querySelector("#loader");

    setup.textContent = "";
    punchline.textContent = "";
    loader.style.display = "block";

    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        loader.style.display = "none";
        setup.textContent = data.setup;
        punchline.textContent = data.punchline;
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        loader.style.display = "none";
        setup.textContent = "Oops! Something went wrong. Try again.";
      });
  }

  document
    .querySelector("#btnRandomJoke")
    .addEventListener("click", randomJoke);
});
