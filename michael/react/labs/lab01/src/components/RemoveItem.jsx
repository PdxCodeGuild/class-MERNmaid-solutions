import { useState } from "react";

// Remove Item without backend functionality
const RemoveItem = ({
	value,
	handleChange,
	handleSubmit,
	isError,
	error,
	isSuccess,
	success,
}) => {
	return (
		<div className="remove-item">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={value}
					onChange={handleChange}
					placeholder="Remove item"
				/>
				<button type="submit">Remove</button>
			</form>
			{isError && <p className="error">{error}</p>}
			{isSuccess && <p className="success">{success}</p>}
		</div>
	);
};

export default RemoveItem;
