import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <h1>
        Fake Posts
      </h1>

      <div>
        {posts.map((post) => (
          <div class="post" key={post.id}>
            <h3>Title: {post.title}</h3>
            <div>{post.body}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;