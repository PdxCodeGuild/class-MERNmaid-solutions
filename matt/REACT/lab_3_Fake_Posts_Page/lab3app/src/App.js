import './App.css';
import {useEffect, useState } from 'react'
import axios from 'axios'

import Posts from './components/Posts'

function App() {
  const [posts, setPosts] = useState([])
  const [inputvalue, setInputValue] = useState('')

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      setPosts(response.data)
      // console.log(response.data)
    })
  }, [])

  const handleInput = () => {
    console.log(inputvalue)
  }


  return (
    <div className="App">
      <input placeholder='filter by word' onChange={e => setInputValue(e.target.value)} ></input>
      <button onClick={() => handleInput()}>Submit</button>
      {posts && <Posts posts={posts} inputvalue={inputvalue}/>}
    </div>
  );
}

export default App;
