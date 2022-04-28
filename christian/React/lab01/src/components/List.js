import { useState } from "react"
import Task from "./Task"

const List = (props) => {
    const [removeTodo, setRemoveTodo] = useState()
    const [newTodo, setNewTodo] = useState("") //blank string for input of new todo
    const [todo, setTodo] = useState(["walk grandpa", "butter the cat", "feed girlfriend"]);

    const handleChange = (e) => {
        setNewTodo(e.target.value) // event targets the value. Value being newTodo
        
    };

    const handleClick = () => {
        setTodo([newTodo, ...todo]) 
    };
    const removeChange = (e) => {
        deleteTodo(e.target.value)
    }
    const removeClick = (e) => {
        setRemoveTodo([todo.splice(removeTodo)])
    }

    // input box for new toDo with on change event
    //todo.map loops over array
    // Task pulls from the Task function in Task.js
    return (
        <div>
            <input type="text" value={newTodo} onChange={(e) => handleChange(e)} /> 
            <button onClick={handleClick}>Add todo</button>
            {todo.map((todo, index) => (
                <Task key={index} name={todo} />
                ))}
                <button value={removeTodo} onChange={(e) => removeChange(e)} onClick={removeClick}>Todone</button>
        </div>
        
        
    );
}


export default List