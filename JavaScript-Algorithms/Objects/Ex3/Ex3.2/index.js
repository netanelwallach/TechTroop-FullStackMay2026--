const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

//const name = //'Bob' or 'Ted';
const name = "tEd`";
let upperCaseName = name.toUpperCase();
let flag = true;

const keys = Object.keys(reservations);
for (let index = 0; index < keys.length; index++) {
  const element = keys[index];
  if (element.toUpperCase() === upperCaseName) {
    flag = false;
    break;
  }
}

if (!reservations[name] && flag) {
  reservations[name] = { claimed: true };
}

console.log(reservations);
