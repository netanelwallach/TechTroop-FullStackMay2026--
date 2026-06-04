// What will console log? ReferenceError - distance
// Will there be an error? Yes
// Why? distance in local scope
// Will something be undefined? No
// Why?
// To what scope does each variable belong? run - global, diatance - if loop, i-global
// Global or local? If local, to which specifically?

const run = true;

if (run) {
  let distance = 8;
  for (var i = 0; i < distance; i++) {
    console.log("running");
  }
  console.log("Finished running " + distance + " miles");
}

console.log(i);

console.log("Damn, you see this gal? She ran " + distance + " miles");
