import { useState } from "react";
import TodoList from "./TodoList";

export default function Todoinput() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="p-4">
      <input
        className="border px-2 py-1"
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={addTodo}
        className="bg-red-500 text-white px-4 py-1 rounded ml-3"
      >
        Add
      </button>
        <TodoList todos={ todos } />

    </div>
  );
}
