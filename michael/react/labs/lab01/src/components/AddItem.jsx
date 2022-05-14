import { useState } from "react";

function AddItem(props) {
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
		fetch("/api/items", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: value,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.error) {
					setIsLoading(false);
					setIsError(true);
					setError(data.error);
				} else {
					setIsLoading(false);
					setIsSuccess(true);
					setSuccess(data.success);
					setValue("");
					setItems(data.items);
				}
			})
			.catch((error) => {
				setIsLoading(false);
				setIsError(true);
				setError(error);
			});
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
					Submit
				</button>
			</form>
			{isLoading && <p>Loading...</p>}
			{isError && <p>{error}</p>}
			{isSuccess && <p>{success}</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li key={item.id} className="list-group-item">
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default AddItem;
