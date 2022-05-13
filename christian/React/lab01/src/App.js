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
        checkBox[index].completed = !checkBox[index].completed //target completed value in the array. Flip with "!" and use new array
        console.log(checkBox[index].completed)
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
        <div className="list py-20">
            <div className="title flex justify-center py-8 text-2xl bg-zinc-700 border-solid mb-8 rounded-md">Heres the Todo List</div>
            <input placeholder="add todo here" type="text" value={newItem} onChange={(e) => handleChange(e)} />
            <button className="ml-5 bg-zinc-700 rounded-full px-8" onClick={addTodoClick}>Add todo</button>
            <List items={items} toggleCompleted={toggleCompleted} removeClick={removeClick} />
        </div>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<App />)