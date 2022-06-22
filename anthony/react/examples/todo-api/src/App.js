import './App.css';
import { useEffect, useState } from "react"
import List from "./components/List"
import client from "./api/client"

function App() {
  const [lists, setLists] = useState([])
  const [listName, setListName] = useState("")
  const [listDescription, setListDescription] = useState("")


  const getLists = () => {
    client.get("/lists/")
    .then(response => {
      setLists(response.data)
    })
  }

  useEffect(() => {
    getLists()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    client.post("/lists/create", {
      name: listName,
      description: listDescription
    }).then(() => {
      getLists()
    })

    setListName("")
    setListDescription("")
  }

  return (
    <div className="App">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" value={listName} onChange={e => setListName(e.target.value)}/>
        <input type="text" placeholder="description" value={listDescription} onChange={e => setListDescription(e.target.value)}/>
        <button type="submit">Create List</button>
      </form>
      {lists.map(list => <List key={list.id} name={list.name} description={list.description} items={list.items} id={list.id} getLists={getLists}/>)}
    </div>
  );
}

export default App;
