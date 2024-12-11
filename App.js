import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import KanbanBoard from "./components/KanbanBoard";
import "./App.css";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Kanban Board</h1>
        <KanbanBoard />
      </div>
    </DndProvider>
  );
}

export default App;
