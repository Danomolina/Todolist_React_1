import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        placeholder="¿Que tarea necesitas hacer?"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyDown={addTask}
      />
      <ul>
        {tasks.length === 0 ? (
          <li>No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} onMouseEnter={() => showDeleteIcon(index)} onMouseLeave={() => hideDeleteIcon(index)}>
              {task}
              <span className="delete-icon" onClick={() => removeTask(index)}>x</span>
            </li>
          ))
        )}
      </ul>
      <div>{tasks.length} item{tasks.length !== 1 ? "s" : ""} Articulos</div>
    </div>
  );
};

export default TodoList;
