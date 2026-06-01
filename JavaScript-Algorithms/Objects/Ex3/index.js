const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

//const name = //'Bob' or 'Ted';
const name = "Ted";
if (!reservations[name]) {
  console.log("You have no reservation");
} else {
  if (!reservations[name].claimed) {
    console.log("Welcome " + name);
  } else {
    console.log("Hmm, someone already claimed this reservation");
  }
}
