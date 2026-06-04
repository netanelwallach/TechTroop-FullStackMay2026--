// What will console log? Error
// Will there be an error? Yes - seed
// Why? seed out of scope in plant
// Will something be undefined? no
// Why?
// To what scope does each variable belong? pot, global, seed - getSeed
// Global or local? If local, to which specifically?

const pot = "red pot with earth in it";

const getSeed = function () {
  const seed = "brown seed";
};

const plant = function () {
  getSeed();
  console.log("Planting the " + seed + " inside a " + pot);
};

plant();
