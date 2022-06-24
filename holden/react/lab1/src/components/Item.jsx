import { useState } from "react";

const Item = (props) => {
	const [completed, toggleCompleted] = useState(false);

	const handleChange = (e) => {
		toggleCompleted(!completed);
	};

	return (
		<div className="item">
			<p className={completed ? "completed" : ""}>{props.name}</p>
			<input
				type="checkbox"
				value={completed}
				onChange={(e) => handleChange(e)}
			/>
			{props.button}
		</div>
	);
};

export default Item;