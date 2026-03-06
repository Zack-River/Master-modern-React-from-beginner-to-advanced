import TaskCounter from "./TaskCounter";

export default function TaskCounters({ totalTasks, completedTasks, activeTasks }) {
  return (
    <div className="task-counters">
      <TaskCounter tasks={totalTasks} title="Total" />
      <TaskCounter tasks={completedTasks} title="Completed" />
      <TaskCounter tasks={activeTasks} title="Active" />
    </div>
  );
}
