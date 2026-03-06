import TaskInput from "./TaskInput";
import TaskCounters from "./TaskCounters";
import TaskFilter from "./TaskFilter";

export default function Header({ handleSelection, tasks, onAdd }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const activeTasks = tasks.filter((task) => !task.completed).length;
  return (
    <div className="header">
      <h1 className="header-title">Mini Trello App</h1>
      <TaskInput onAdd={onAdd} />
      <div className="header-actions">
        <TaskCounters
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          activeTasks={activeTasks}
        />
        <TaskFilter handleSelection={handleSelection} />
      </div>
    </div>
  );
}
