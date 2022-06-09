import AddItem from "../components/AddItem";
import RemoveItem from "../components/RemoveItem";
import ToggleComplete from "../components/ToggleComplete";
import { useState } from "reactn";

// Todo List without backend functionality
const TodoList = () => {
	const [items, setItems] = useState([]);
	const [value, setValue] = useState("");
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [success, setSuccess] = useState("");
	const [isCompleted, setIsCompleted] = useState(false);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value === "") {
			setIsError(true);
			setError("Please enter a value");
		} else if (items.includes(value)) {
			setIsError(true);
			setError("Item already exists");
		} else if (value.trim().length === 0) {
			setIsError(true);
			setError("Please enter a value");
			setValue("");
		} else {
			setIsError(false);
			setError("");
			setIsSuccess(true);
			setSuccess("");
			setItems([...items, value]);
			setValue("");
		}
	};

	// Toggle item green when completed, red when not completed
	const handleToggleComplete = (e) => {
		setIsCompleted(!isCompleted);
	};

	// Remove item from list
	const handleRemoveItem = (e) => {
		e.preventDefault();
		setIsSuccess(false);
		setSuccess("");
		setItems(items.filter((item) => item !== e.target[0].className));
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
						<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
							<ToggleComplete
								value={item}
								handleToggleComplete={handleToggleComplete}
								isCompleted={isCompleted}
							/>
							<RemoveItem
								value={item}
								handleRemoveItem={handleRemoveItem}
								isError={isError}
								error={error}
								isSuccess={isSuccess}
								success={success}
							/>
							{isCompleted && <span className="bg-green-600">{item}</span>}
							{!isCompleted && <span className="bg-yellow-200">{item}</span>}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
