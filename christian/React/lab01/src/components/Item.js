import { useState } from "react"
import  List from "./List"


const Item = ({item, toggleCompleted, removeClick}) => {
    
   
    return (
        <div>
            <p className={item.completed ? "completed" : ""}>{item.name}</p>
            <input className="complete" type="checkbox" value={item.completed} onChange={(e) => toggleCompleted(e, item.key)} />
            <button className="ml-5 bg-zinc-700 rounded-full px-8" onClick={() => removeClick(item.key)}>Todone</button>
             
           
                
         </div>
    )
        
}

export default Item