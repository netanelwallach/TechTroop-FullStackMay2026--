const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];

for (const post of posts) {
  for (let index = 0; index < post.comments.length; index++) {
    const element = post.comments[index];
    if (element.id == 3) {
      post.comments.splice(index, 1);
    }
  }
}

console.log(posts);
