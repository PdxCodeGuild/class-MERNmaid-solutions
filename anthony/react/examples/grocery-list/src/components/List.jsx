import { useState } from "react";
import Item from "./Item";

const List = (props) => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([
		"apples",
		"brocoli",
		"water",
		"water",
		"potatoes",
		"carrots",
	]);

	const handleChange = (e) => {
		setNewItem(e.target.value);
	};

	const handleClick = () => {
		setItems([newItem, ...items]);
	};

	return (
		<div>
			<input type="text" value={newItem} onChange={(e) => handleChange(e)} />
			<button onClick={handleClick}>Add Item</button>
			{items.map((item, index) => (
				<Item key={index} name={item} />
			))}
		</div>
	);
};

export default List;
