import { useState } from "react";

const Item = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <div className="item">
      <div className="itemText">
        <h3 className={checked ? "checked" : ""} >{props.name}</h3>
        <p>{props.detail}</p>
      </div>
      <div className="itemBtns">
        <button className="checkedBtn" onClick={() => handleChecked()} >👍</button>
        <button className="deleteItemBtn" onClick={() => props.delete()}>❌</button>
      </div>
    </div>
  );
}

export default Item;
