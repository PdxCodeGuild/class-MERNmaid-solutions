import { useState } from "react";

const Animal = (props) => {
	const [selected, setSelected] = useState(props.selected);

	const handleClick = () => {
		setSelected(!selected);
	};

	return (
		<div className={selected ? "outlined animal" : "animal"}>
			<h1>{props.species}</h1>
			<h2>{props.description}</h2>
			<button onClick={handleClick}>Select me!</button>
		</div>
	);
};

export default Animal;
