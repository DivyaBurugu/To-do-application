import React from "react";
import TaskCard from "./TaskCard";
import { useDrop } from "react-dnd";
import "./Column.css";

const Column = ({ stage, tasks, onTaskMove }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item) => onTaskMove(item.id, stage),
  });

  return (
    <div className="column" ref={drop}>
      <h2>{stage}</h2>
      <div className="tasks">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
