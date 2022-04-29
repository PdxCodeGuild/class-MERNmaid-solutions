const MenuItem = (props) => {
	return (
		<div>
			<h2>{props.name}</h2>
			<h3>Price: ${props.price}</h3>
			<h3>Calories: {props.calories}</h3>
		</div>
	);
};

export default MenuItem;
