import { createRoot } from "react-dom/client"
import List from "./components/List"


const App = (props) => {
    const [completed, setComplete] = useState(false);
    const [newTodo, setNewTodo] = useState("");
    const [todo, setTodo] = useState([{
        name: "butter the cat",
        completed: false,

    }]);
    //toggle completed
    const toggleCompleted = (e, index) => {
        const checkBox = [...todo] //get todo array make new array
        checkBox[index].completed = !checkBox[index].completed //target completed value in the arrat. Flip with "!" and use new array
        setTodo(checkBox)
    }

    const handleChange = (e) => {
        setNewTodo(e.target.value) // event targets the value. Value being newTodo

    };
    // add item
    const addTodoClick = () => {
        setTodo([
            ...todo,
            { "name": newTodo }
        ])
    };
    // remove item
    const removeClick = (index) => {
        const tempList = [...todo] //make copy of list
        tempList.splice(index, 1) // splice item to be removed
        setTodo(tempList)
    }
    return (
        <div>
            <h1>Stuff to do</h1>
            <input type="text" value={newTodo} onChange={(e) => handleChange(e)} />
            <button onClick={addTodoClick}>Add todo</button>
            {todo.map((todo, index) => (

                <div className="todo">
                    <List key={index}> {todo.name} /</List>
                    <button key={index} onClick={() => removeClick(index)}>Todone</button>
                </div>
            ))}
       </div>
    )
            }
const root = createRoot(document.getElementById("root"));
root.render(<App />)