import { useState, useEffect } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import { initialTasks } from "../data/initialTasks";

export default function App() {
  const [filter, setFilter] = useState("all");
  
  // Initialize tasks from localStorage or initialTasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("miniTrelloTasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }
    return initialTasks;
  });

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("miniTrelloTasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSelection(filter) {
    setFilter(filter);
  }

  function handleAddTask(text) {
    const newTask = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  function handleToggleCompleted(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  function handleUpdateTask(id, newText) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  return (
    <div className="app">
      <Header handleSelection={handleSelection} tasks={tasks} onAdd={handleAddTask} />
      <TaskList
        filter={filter}
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
    </div>
  );
}