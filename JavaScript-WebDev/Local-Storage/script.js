const input = document.getElementById("input-text");
const button = document.getElementById("button");
const display = document.getElementById("display");
let wisdom = JSON.parse(localStorage.getItem("wisdom")) || [];

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const uniqueId = Date.now();
    wisdom.push({ id: uniqueId, text: text });

    if (wisdom.length % 2 === 0) {
      localStorage.setItem("wisdom", JSON.stringify(wisdom));
    }
    render();
    input.value = "";
  }
});

function render() {
  display.innerHTML = "";
  for (let i = 0; i < wisdom.length; i++) {
    const element = wisdom[i];

    const div = document.createElement("div");

    const span = document.createElement("span");
    span.innerText = element.text;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("data-id", element.id);
    deleteButton.addEventListener("click", function () {
      const idToClick = this.getAttribute("data-id");
      deleteItem(idToClick);
    });

    div.appendChild(span);
    div.appendChild(deleteButton);

    display.appendChild(div);
  }
}

function deleteItem(targetId) {
  wisdom = wisdom.filter((item) => String(item.id) !== String(targetId));

  localStorage.setItem("wisdom", JSON.stringify(wisdom));
  render();
}

const clear = document.getElementById("clear");
clear.addEventListener("click", function () {
  wisdom = [];
  localStorage.removeItem("wisdom");
  render();
});
