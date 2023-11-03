import React, { useState } from "react";

function ToDoTask() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('')

  const addItem = () => {
    if(newTask.trim() !== ''){
      const task = {id: Date.now(), text: newTask, completed: false}
      setTasks([...tasks, task])
      setNewTask('')
      return task
    }
  };

  const taskHandler = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={taskHandler}
        />
        <button onClick={addItem}>Add</button>
        {/* <ul>
        {task.map((t, index)=> (
          <li key={index}>{t}</li>
          ))}
        </ul> */}
        <div>
          <ul>
            {tasks.map((t) => (
              <li key={t.id}>
                <input type="checkbox" checked={t.completed} />
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default ToDoTask;
