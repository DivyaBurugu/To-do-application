import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "ToDo",
    };
    onAddTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="task-form">
      <button
        onClick={() => document.querySelector(".task-form-modal").classList.add("open")}
      >
        Add Task
      </button>
      <div className="task-form-modal">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
        <button
          className="close-modal"
          onClick={() => document.querySelector(".task-form-modal").classList.remove("open")}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
