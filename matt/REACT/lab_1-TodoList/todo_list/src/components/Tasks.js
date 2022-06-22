import React from 'react';
import Task from "./Task"

export default function Tasks({ tasks, removeItem }) {
    return(
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} completed={false} removeItem={removeItem} />
            ))}


        </>
    )
}