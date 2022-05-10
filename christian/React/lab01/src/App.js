import { createRoot } from "react-dom/client"
import List from "./components/List"
import { useState } from "react"


const App = () => {
    const [completed, setComplete] = useState(false);
    const [newItem, setNewItem] = useState("");
    const [items, setItem] = useState([
        {
            name: "butter the cat",
            completed: false,
        },
        {
            name: "walk",
            completed: false,
        }
       
    ]);


    //toggle completed
    const toggleCompleted = (e, index) => {
        const checkBox = [...items] //get todo array make new array
        checkBox[index].completed = !checkBox[index].completed //target completed value in the arrat. Flip with "!" and use new array
        setItem(checkBox)
    }
    //target change of value
    const handleChange = (e) => {
        setNewItem(e.target.value) // event targets the value. Value being newItem

    };
    // add item
    const addTodoClick = () => {
        setItem([
            ...items,
            { "name": newItem }
        ])
    };
    // remove item
    const removeClick = (index) => {
        const removeItemList = [...items] //make copy of list
        removeItemList.splice(index, 1) // splice item to be removed
        setItem(removeItemList)
    }
    return (
        <div className="list">
            <h1>Stuff to do</h1>
            <input type="text" value={newItem} onChange={(e) => handleChange(e)} />
            <button onClick={addTodoClick}>Add todo</button>
            <List items={items} toggleCompleted={toggleCompleted} removeClick={removeClick} />
        </div>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<App />)