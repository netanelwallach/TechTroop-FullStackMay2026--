import { getPosts, addPost } from "./model.js";

const container = document.getElementsByClassName("form-container")[0];
function render(arr) {
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    div.innerText = `Post: ${arr[i].name} - ${arr[i].text}`;
    container.appendChild(div);
  }
}

const button = document.getElementById("submit-btn");
button.addEventListener("click", () => {
  const name = document.querySelector("#name");
  const text = document.querySelector("#text");
  addPost(name.value, text.value);
  render(getPosts());
  name.value = "";
  text.value = "";
});
