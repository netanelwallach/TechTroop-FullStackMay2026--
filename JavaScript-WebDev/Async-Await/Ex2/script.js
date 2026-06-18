// Starter code structure:
async function getUserWithPosts(userId) {
  // Your implementation here
  // 1. Fetch user from: https://jsonplaceholder.typicode.com/users/${userId}
  // 2. Fetch posts from: https://jsonplaceholder.typicode.com/posts?userId=${userId}
  // 3. Return combined data
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    if (!userResponse.ok) {
      throw new Error("User not found");
    }
    const user = await userResponse.json();
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    if (!postsResponse.ok) {
      throw new Error(`User: ${user.name}'s posts not found`);
    }
    const posts = await postsResponse.json();
    const result = { user, posts };
    console.log("Found user and posts: ", result);

    return result;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
}

getUserWithPosts(6);
getUserWithPosts(8);
getUserWithPosts(999);
