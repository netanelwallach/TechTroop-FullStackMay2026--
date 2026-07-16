import { useState, useEffect } from "react";
import styles from "./Posts.module.css";
import PostCard from "./PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async function () {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setPosts(data.slice(0, 10));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Top Posts</h1>
      <div className={styles["posts-container"]}>
        {loading === true ? (
          <div>Loading</div>
        ) : (
          posts.map((p) => (
            <PostCard
              key={p.id}
              title={p.title}
              body={p.body}
              className={styles["card"]}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Posts;
