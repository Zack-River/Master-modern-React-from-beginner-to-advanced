export default function TaskFilter({ handleSelection }) {
  return (
    <select className="task-filter" onChange={(e) => handleSelection(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
  );
}
