const Task = ({ task, removeItem }) => {
    return (
        <div id="taskItem">
                <p id="taskText">{task.text} {task.completed}</p>
                <button id={task.id} className="toggleBtn" onClick={() => toggleCompleted(task)}>pending</button>
                <button id= {task.id} onClick={() => removeItem(task.id)}>x</button>

        </div>
    )
}

function toggleCompleted(task){
    const taskElement = document.getElementById(task.id);
    if (!task.completed){
        taskElement.style.background = 'lightgreen'
        taskElement.innerHTML = 'completed'
        task.completed = true
    }
    else{
        taskElement.style.background = 'initial'
        taskElement.innerHTML = 'pending'
        task.completed = false
    }

}

export default Task