import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Add a new task"
          className="border w-full p-2 rounded-md"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-500 text-white rounded-md"
        >
          Add Task
        </button>
      </form>
      <ol className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 border-b">
            {task}
          </li>
        ))}
      </ol>
    </>
  );
};

export { TaskList }; 
