// What will console log? nothing
// Will there be an error? yes
// Why? cowSound scope
// Will something be undefined? no
// Why? cowSount not reachable
// To what scope does each variable belong? if block and no to else
// Global or local? If local, to which specifically?

if (13 == "space") {
  let cowSound = "moo";
} else {
  console.log("Cow says " + cowSound);
}
