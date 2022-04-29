import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/addTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Walk the dog',
      completed: false,
    },
    {
      id: 2,
      text: 'Exercise',
      completed: false,
    }
  ])

  const addItem = (task) => {
    task.id = Date.now();
    task.completed = false;
    setTasks([...tasks, task])
  }

  const removeItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div id="todoListContainer">
      <Header />
      <AddTask addTask={addItem}/>
      <Tasks tasks={tasks} removeItem={removeItem}/>
    </div>
  );
}

export default App;
