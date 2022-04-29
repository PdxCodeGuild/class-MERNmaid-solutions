import React, { useState } from 'react';

export default function AddItem({ addTask }) {
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTask({text})
    }

    return(
        <form >
            <input
                placeholder ='Enter a task'
                value={text}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add Task</button>
        </form>
    )
}