import React, { useState } from "react";
import { initialTasks } from "../utils/dummyData";
import Column from "./Column";
import TaskForm from "./TaskForm";
import "./KanbanBoard.css";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTaskMove = (taskId, newStatus) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: newStatus } : task));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="kanban-board">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="columns">
        {["ToDo", "InProgress", "PeerReview", "Done"].map(stage => (
          <Column
            key={stage}
            stage={stage}
            tasks={filteredTasks.filter(task => task.status === stage)}
            onTaskMove={handleTaskMove}
          />
        ))}
      </div>
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default KanbanBoard;
