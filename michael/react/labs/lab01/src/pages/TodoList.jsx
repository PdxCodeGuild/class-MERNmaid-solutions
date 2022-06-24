import Item from "../components/Item";
import { useState } from "reactn";

const TodoList = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const addTodo = () => {
		if (todos.includes(newTodo)) {
			return;
		}
		setTodos([...todos, newTodo]);
		setNewTodo("");
	};

	const removeTodo = (todo) => {
		setTodos(todos.filter((t) => t !== todo));
	};

	const toggleComplete = (todo) => {
		if (todo.isComplete) {
			setTodos(
				todos.map((t) => (t === todo ? { ...t, isComplete: false } : t))
			);
		}
	};
	return (
		<div className="p-4 h-screen bg-teal-100">
			<input
				className="border-2"
				type="text"
				value={newTodo}
				onChange={handleChange}
			/>
			<button className="border-2 border-black" onClick={addTodo}>
				Add
			</button>
			<div className="flex">
				<ul className="border-1">
					{todos.map((todo) => (
						<Item
							key={todo}
							text={todo}
							removeTodo={removeTodo}
							toggleComplete={toggleComplete}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TodoList;
