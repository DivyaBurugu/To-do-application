import React from "react";
import { useDrag } from "react-dnd";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`task-card ${isDragging ? "dragging" : ""}`}
      ref={drag}
    >
      <h4>{task.title}</h4>
      <p>{task.description.substring(0, 50)}...</p>
    </div>
  );
};

export default TaskCard;
