const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const reserve = document.getElementById("reserve");

reserve.onclick = () => {
  const text = document.getElementById("reserveName");
  const name =
    text.value.charAt(0).toUpperCase() + text.value.slice(1).toLowerCase();
  if (!reservations[name]) {
    alert("You have no reservation");
  } else if (reservations[name].claimed) {
    alert("Hmm, someone already claimed this reservation");
  } else if (reservations[name].claimed === false) {
    alert(`Welcome ${name}`);
  }
};
