async function fetchData(type) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${type}`,
    );
    if (!response.ok) {
      throw new Error(`${type} not found"`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching type:", error.message);
    return null;
  }
}

async function dashboard() {
  const users = await fetchData("users");
  const posts = await fetchData("posts");
  const comments = await fetchData("comments");

  const totalUsers = users.length;
  const totalPosts = posts.length;
  const totalComments = comments.length;
  const avgPostsPerUser = posts.length / users.length;
  const avgCommentsPerPost = comments.length / posts.length;

  const summary = {
    totalUsers,
    totalPosts,
    totalComments,
    avgPostsPerUser,
    avgCommentsPerPost,
  };

  const topUsers = getTop3(getUsersInfo(users, posts, comments));

  const recentPosts = getRecentPosts(posts);

  return { summary, topUsers, recentPosts };
}

function getUsersInfo(users, posts, comments) {
  const usersInfo = users.map((user) => {
    const userPosts = posts.filter((post) => post.userId === user.id);
    const userComments = comments.filter(
      //   (comment) => comment.postId === userPosts.id,
      (comment) => userPosts.some((post) => post.id === comment.postId),
    );
    return {
      userName: user.name,
      postCount: userPosts.length,
      commentCount: userComments.length,
    };
  });
  return usersInfo;
}

function getTop3(usersInfo) {
  return [...usersInfo].sort((a, b) => b.postCount - a.postCount).slice(0, 3);
}

function getRecentPosts(posts) {
  return posts.sort((a, b) => b.id - a.id).slice(0, 5);
}

async function printDashboard() {
  const result = await dashboard();
  console.log(result);
}

printDashboard();
