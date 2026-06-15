const render = function () {
  for (let post of posts) {
    let postBox = $(
      "<div class='post-box'><p class=name>" +
        post.name +
        "</p><p class=text>" +
        post.text +
        "</p></div>",
    );
    $("#timeline").append(postBox);
  }
};
render();

// bad
// $("post").on("click", function () {
//   const name = $("input-name").val();
//   const text = $("input-text").val();
//   $("#timeline").append(newPost(name, text));
//   //where newPost is a funciton that creates a post html element with the given name and text
// });

$("post").on("click", function () {
  posts.push({
    name: $("input-name").val(),
    text: $("input-text").val(),
  });
});
