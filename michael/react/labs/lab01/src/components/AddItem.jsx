import { useState } from "react";

// Add Item without backend functionality
const AddItem = ({
	value,
	handleChange,
	handleSubmit,
	isError,
	error,
	isSuccess,
	success,
}) => {
	return (
		<div className="add-item">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={value}
					onChange={handleChange}
					placeholder="Add item!"
				/>
				<button type="submit">Add!</button>
			</form>
			{isError && <p className="error">{error}</p>}
			{isSuccess && <p className="success">{success}</p>}
		</div>
	);
};

export default AddItem;
