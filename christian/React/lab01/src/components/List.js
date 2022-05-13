import { useState } from "react"
import Item from "./Item"

const List = ({items, toggleCompleted, removeClick}) => {

    console.log(items, "PROPS")

    return (
        <div className="items ">
            {items.map((item, index) => (
                <Item key={index} index={index} item={item} toggleCompleted={toggleCompleted} removeClick={removeClick}  />
            ))}
        </div>
    )
                
                
                
             



}



export default List