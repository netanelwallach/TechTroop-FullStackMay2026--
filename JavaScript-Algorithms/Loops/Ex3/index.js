const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

for (let index = 0; index < posts.length; index++) {
  const element = posts[index];
  if (element.id == 2) {
    posts.splice(index, 1);
  }
}

console.log(posts);
