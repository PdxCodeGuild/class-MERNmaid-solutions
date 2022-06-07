import AddItem from "../components/AddItem";
import RemoveItem from "../components/RemoveItem";
import ToggleComplete from "../components/ToggleComplete";
import { useState } from "react";

// Todo List without backend functionality
const TodoList = () => {
	const [items, setItems] = useState([]);
	const [value, setValue] = useState("");
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [success, setSuccess] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim() === "") {
			setIsError(true);
			setError("Please enter a value");
			setIsSuccess(false);
			setSuccess("");
		} else {
			setIsError(false);
			setError("");
			setIsSuccess(true);
			setSuccess("Item added");
			setItems([...items, value]);
			setValue("");
		}
	};

	const handleToggleComplete = (e) => {
		const index = items.indexOf(e.target.value);
		const newItems = [...items];
		newItems[index] = `${newItems[index]} (completed)`;
		setItems(newItems);
	};

	const handleRemoveItem = (e) => {
		const index = items.indexOf(e.target.value);
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
	};

	return (
		<div className="todo-list">
			<h1>Todo List</h1>
			<AddItem
				value={value}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				isError={isError}
				error={error}
				isSuccess={isSuccess}
				success={success}
			/>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						<ToggleComplete
							value={item}
							handleToggleComplete={handleToggleComplete}
						/>
						<RemoveItem value={item} handleRemoveItem={handleRemoveItem} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
