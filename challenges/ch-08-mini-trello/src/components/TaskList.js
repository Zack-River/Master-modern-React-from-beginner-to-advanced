import TaskItem from "./TaskItem";

export default function TaskList({ filter, tasks, onToggleCompleted, onDeleteTask, onUpdateTask }) {
  let filteredTasks = tasks;
  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else if (filter === "active") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  return (
    <div className="task-list-container">
      <ul className="task-list">
        {filteredTasks.length === 0 && <p className="no-tasks">No tasks found. Enjoy your day! 🌟</p>}
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleCompleted={onToggleCompleted}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
}
