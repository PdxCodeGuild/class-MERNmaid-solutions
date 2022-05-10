import { useState } from "react";
import Item from "./Item";

const List = (props) => {
  const [newItem, setNewItem] = useState({name: "", detail: ""});
  const [items, setItems] = useState([]);

  const handleAddItemName = (e) => {
    setNewItem(newItem => ({name: e.target.value, detail: newItem.detail}));
  };

  const handleAddItemDetail = (e) => {
    setNewItem(newItem => ({name: newItem.name, detail: e.target.value}));
  };

  // ADD ITEM
  const handleAddItem = () => {
    setItems([newItem, ...items]);
    setNewItem({name: "", detail: ""})
  }

  // TOGGLE COMPLETED
  const handleEnterKey = (e) => {
    if (e.key == "Enter") {
      handleAddItem();
    }
  }

  // REMOVE ITEM
  const handleDeleteItem = (key) => {
    const updatedItems = items.filter((item, index) => (index != key))
    setItems(updatedItems);
    console.log(key);
  };

  const handleClearList = () => {
    setItems([]);
  }

  return (
    <div className="list">
      <h2>{props.listName}</h2>
      <div id="inputsContainer">
        <input
          type="text"
          placeholder="What to do?"
          value={newItem.name}
          onChange={(e) => handleAddItemName(e)}
          onKeyPress={(e) => handleEnterKey(e)}
        />
        <input
          type="text"
          placeholder="The details..."
          value={newItem.detail}
          onChange={(e) => handleAddItemDetail(e)}
          onKeyPress={(e) => handleEnterKey(e)}
        />
        <button id="addItemBtn" onClick={handleAddItem}>+</button>
        <button id="clearListBtn" onClick={handleClearList}>Clear</button>
      </div>
      <div className="listItemsContainer">
        {items.map((item, index) => (
          <Item
            name={item.name}
            detail={item.detail}
            checked={item.checked}
            key={index}
            delete={() => handleDeleteItem(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
