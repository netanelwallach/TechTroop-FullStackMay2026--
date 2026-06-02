const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

//const name = //'Bob' or 'Ted';
const name = "ted";
if (!reservations[name]) {
  reservations[name] = { claimed: true };
}

console.log(reservations);
