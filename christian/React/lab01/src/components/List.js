import { useState } from "react"
import Item from "./Item"

const List = (props) => {

    return (
        <div>
            {todo.map((props, index) => (
                <Item key={index}>{props.name}</Item>
            ))}
        </div>

    )


}



export default List