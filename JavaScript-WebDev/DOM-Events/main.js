const list = document.getElementById("list");

function addItem() {
  const newItem = document.createElement("li");
  newItem.innerHTML = "A new item!";
  list.appendChild(newItem);
}

const box = document.getElementById("box");
box.onclick = function () {
  box.innerHTML = "clicked";
};

const secondBox = document.createElement("div"); // dynamically creating an element

secondBox.setAttribute("class", "box");
secondBox.onclick = function () {
  // adding an event to the new element
  secondBox.innerHTML = "I'm alive!";
};

document.getElementById("some-id").appendChild(secondBox); // now the box will be on the page, and will react to a click!
