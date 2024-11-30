import { useEffect, useState } from "react";

const PostsApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Postlar ro'yxati</h1>
      {posts.length > 0 ? (
        <table style={{ width: "100%", border: "1px solid black" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sarlavha</th>
              <th>Tarkib</th>
            </tr>
          </thead>
          <tbody>
            {posts.slice(0, 10).map((post) => (
              <tr key={post}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};

export default PostsApp;
