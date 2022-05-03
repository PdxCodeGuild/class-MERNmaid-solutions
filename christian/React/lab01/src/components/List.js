import { useState } from "react"
import Task from "./Task"

const List = (props) => {
    const [completed, setComplete] = useState(false);
    const [newTodo, setNewTodo] = useState("");
    const [todo, setTodo] = useState([{ 
        name: "butter the cat",
        completed: false,
    
    }]);
    const toggleCompleted = (e, index) => {
        const checkBox = [...todo] //get todo array make new array
        checkBox[index].completed = !checkBox[index].completed //target completed value in the arrat. Flip with "!" and use new array
        setTodo(checkBox)


    }

   

    const handleChange = (e) => {
        setNewTodo(e.target.value) // event targets the value. Value being newTodo

    };

    const addTodoClick = () => {
        setTodo([
            ...todo,
            {"name": newTodo}
        ])
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
            <button onClick={addTodoClick}>Add todo</button>
            {todo.map((todo, index) => (

                <div className="todo">
                 <p key={index}> {todo.name} </p>
                <button key={index} onClick={() => removeClick(index)}>Todone</button>
            
            <p className={completed ? "completed" : ""}>{todo.name}</p>
            <input type="checkbox" value={completed} onChange={(e) => toggleCompleted(e, index)} />
         </div>

            ))}

        </div>


    );
}


export default List