// What will console log? No
// Will there be an error? Yes
// Why? assign to const
// Will something be undefined? no
// Why?
// To what scope does each variable belong? isEnough - global, i - for loop
// Global or local? If local, to which specifically?
const isEnough = false;

const makeEnough = function () {
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      isEnough = true;
    }
  }
};

makeEnough();
if (isEnough) {
  console.log("Finally, sheesh");
} else {
  console.log("Here we go again...");
}
