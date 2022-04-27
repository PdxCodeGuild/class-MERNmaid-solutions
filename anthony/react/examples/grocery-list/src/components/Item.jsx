import { useState } from "react";

const Item = (props) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (e) => {
		setChecked(!checked);
	};

	return (
		<div className="item">
			<p className={checked ? "checked" : ""}>{props.name}</p>
			<input
				type="checkbox"
				value={checked}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default Item;
