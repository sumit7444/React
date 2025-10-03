import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { task: newTodo, id: uuidv4() }]);
      setNewTodo("");
    }
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Uppercase all tasks
  const upperCaseAll = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  // Lowercase all tasks
  const lowerCaseAll = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toLowerCase(),
      }))
    );
  };

  return (
    <div>
      <input
        placeholder="Add todo task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>

      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>{" "}
      <button onClick={lowerCaseAll}>Lowercase All</button>
    </div>
  );
}