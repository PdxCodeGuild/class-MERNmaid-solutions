import AddItem from "../components/AddItem";
import { useState } from "react";

function TodoList() {
	const [value, setValue] = useState("");
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);
	const [success, setSuccess] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		setIsError(false);
		setIsSuccess(false);
		setError("");
		setSuccess("");
	};

	return (
		<div className="container">
			<h1>Add Item</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter name"
						value={value}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					{isLoading ? "Loading..." : "Add Item"}
				</button>
			</form>
			{isLoading && <p>Loading...</p>}
			{isError && <p>{error}</p>}
			{isSuccess && <p>{success}</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li className="list-group-item" key={item._id}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
