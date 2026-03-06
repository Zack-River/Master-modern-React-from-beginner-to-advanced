import { useState } from "react";

export default function TaskItem({ task, onToggleCompleted, onDeleteTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editext, setEditText] = useState(task.text);

  function handleSubmit(e) {
    e.preventDefault();
    if (!editext.trim()) return;
    onUpdateTask(task.id, editext);
    setIsEditing(false);
  }

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleCompleted(task.id)}
      />
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <input
            type="text"
            value={editext}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <p className="task-text">{task.text}</p>
      )}

      <div className="task-actions">
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit"}
        </button>
        <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}
