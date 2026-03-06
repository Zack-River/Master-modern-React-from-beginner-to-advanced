import { useState } from "react";

export default function TaskInput({ onAdd }) {
  const [taskText, setTaskText] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    if (!taskText.trim()) return;
    onAdd(taskText.trim());
    setTaskText("");
  }

  return (
    <form className="task-input" onSubmit={handleAddTask}>
      <input
        className="task-input-text"
        type="text"
        placeholder="Add a task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button className="task-input-button">Add Task</button>
    </form>
  );
}
