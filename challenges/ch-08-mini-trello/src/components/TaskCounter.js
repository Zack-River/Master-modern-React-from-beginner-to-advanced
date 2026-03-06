export default function TaskCounter({ tasks, title }) {
  return (
    <div className="task-counter">
      <p className="title">{title}</p>
      <p className="count">{tasks}</p>
    </div>
  );
}
