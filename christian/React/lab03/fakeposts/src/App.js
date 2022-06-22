import "./App.css";
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
      <h1 className="flex justify-center bg-slate-800 pb-5 pt-5 text-6xl">
        Fake Posts
      </h1>

      <div className="bg-slate-700">
        {posts.map((post) => (
          <div className="container items-center pl-5" key={post.id}>
            <p className="text-4xl text-blue-500">Title:</p>
            <div className="pt-3 pb-4 text-3xl text-black">{post.title}</div>
            <p className="text-4xl text-blue-500">Body:</p>
            <div className="pt-4 text-white">{post.body}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
