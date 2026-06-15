const button = document.getElementById("submit-btn");

button.addEventListener("click", () => {
  const err = document.getElementById("err");
  if (err) {
    err.remove();
  }
  validate();
});

function validate() {
  const name = document.getElementById("name");
  const salary = document.getElementById("salary");
  const birthday = document.getElementById("birthday");
  const phone = document.getElementById("phone");

  let str = "";
  if (name.value.length < 2) {
    str += "Name must be at least two characters.\n";
  }

  if (salary.value < 10000) {
    str += "Salary should be more than 10000.\n";
  } else if (salary.value > 16000) {
    str += "Salary should be less than 16000.\n";
  }

  if (!birthday.value) {
    str += "Birthday can't be null.\n";
  }

  if (phone.value.length !== 10) {
    str += "Phone must be 10 digits.\n";
  }

  if (str !== "") {
    const container = document.getElementsByClassName("form-container")[0];
    const err = document.createElement("div");
    err.className = "form-group";
    err.id = "err";
    err.innerText = str;
    err.style.color = "red";
    container.appendChild(err);
  }
}
