const posts = [
  {
    name: "Uncle Jerome",
    text: "Happy birthday kido!",
  },
  {
    name: "BFF Charlene",
    text: "HEARTS LOVE YOU FOREVER BFF4LYFE HBD",
  },
  {
    name: "Old High School Teacher",
    text: "Hey ace, have a good one.",
  },
];

export function getPosts() {
  const postsClone = [...posts];
  return postsClone;
}

export function addPost(name, text) {
  posts.push({ name, text });
}
