import { useState } from "react";

// Toggle Complete Item without backend functionality
const ToggleComplete = ({
	value,
	handleChange,
	handleSubmit,
	isError,
	error,
	isSuccess,
	success,
}) => {
	return (
		<div className="toggle-complete">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={value}
					onChange={handleChange}
					placeholder="Toggle complete"
				/>
				<button type="submit">Toggle</button>
			</form>
			{isError && <p className="error">{error}</p>}
			{isSuccess && <p className="success">{success}</p>}
		</div>
	);
};

export default ToggleComplete;
