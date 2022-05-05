import { useState } from "react"



const Item = (props) => {
    

    


    
    return (
        <div className="todo">
            <p className={completed ? "completed" : ""}>{props.name}</p>
            <input type="checkbox" value={completed} onChange={(e) => toggleCompleted(e, index)} />
         </div>
    )
        
}

export default Item