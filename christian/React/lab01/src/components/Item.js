import { useState } from "react"
import  List from "./List"



const Item = ({item, toggleCompleted, removeClick, index}) => {

    
   
    return (
        <div>

            <p>{item.name}</p>
            <input className="complete" type="checkbox" value={item.completed} onChange={(e) => toggleCompleted(e, index)} />
            <button className="ml-5 bg-zinc-700 rounded-full px-8" onClick={() => removeClick(index)}>Delete</button>
        </div>

    )
        
}

export default Item
            

