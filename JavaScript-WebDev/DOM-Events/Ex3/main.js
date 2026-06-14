const container = document.getElementById("container");

const getRandomColor = function () {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

for (let i = 1; i < 10; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", i);
  container.appendChild(box);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = getRandomColor();
  });
});
