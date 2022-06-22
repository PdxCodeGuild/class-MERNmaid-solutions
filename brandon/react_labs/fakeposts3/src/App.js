import axios from 'axios';
import { useState, useEffect, useCallback, useRef } from 'react';

import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(posts);
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        setPosts(response.data)
      });
  }, [posts]);

  return (
    <div className="App">
      <main className="App-main">
        <Posts posts={posts} />
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
