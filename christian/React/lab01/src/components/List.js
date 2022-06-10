import { useState } from "react"


import Task from "./Task"

const List = (props) => {
    const [completed, setComplete] = useState(false);
    const [newTodo, setNewTodo] = useState("") //blank string for input of new todo
    const [todo, setTodo] = useState(["walk grandpa", "butter the cat", "feed girlfriend"]);

    const toggleCompleted = (e) => {
        setComplete(!completed)


    }

    const handleChange = (e) => {
        setNewTodo(e.target.value) // event targets the value. Value being newTodo

    };

    const handleClick = () => {
        setTodo([newTodo, ...todo])
    };

    const removeClick = (index) => {
        const tempList = [...todo] //make copy of list
        tempList.splice(index, 1) // splice item to be removed
        setTodo(tempList)
    }

    // input box for new toDo with on change event
    //todo.map loops over array
    // Task pulls from the Task function in Task.js
    
    return (
        <div>
            
            <input type="text" value={newTodo} onChange={(e) => handleChange(e)} />
            <button onClick={handleClick}>Add todo</button>
            {todo.map((todo, index) => (

                <div className="todo">
                 <p key={index}> {todo} </p>
                <button key={index} onClick={() => removeClick(index)}>Todone</button>
            <p className={completed ? "completed" : ""}>{props.name}</p>
            <input type="checkbox" value={completed} onChange={(e) => toggleCompleted(e)} />
         </div>

            ))}

        </div>


    );

}



export default List