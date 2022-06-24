import { useState } from "react";
import Item from "./Item";

const List = (props) => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([
	]);

	const handleChange = (e) => {
		setNewItem(e.target.value);
	};

	const addItem = () => {
		setItems([...items, newItem]);
	};

  const removeItem = (index) => {
    const splicedItems = items;
    splicedItems.splice(index,1);
    setItems(splicedItems);
  };

	return (
		<div>
			{items.map((item, index) => (
				<Item key={index} name={item} button={<button onClick={() => removeItem(index)}>X</button>} />
			))}
      <input type="text" value={newItem} onChange={(e) => handleChange(e)} />
      <button onClick={addItem}>Add Item</button>
		</div>
	);
};

export default List;