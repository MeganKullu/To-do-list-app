import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import Todo from "./Todo.jsx";
import EditTodoForm from "./EditTodoForm.jsx";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const completed = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (task, id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo)
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm
            key={index}
            task={todo}
            update={updateTodo}
          />
        ) : (
          <Todo
            task={todo}
            key={index}
            completed={completed}
            deleteTask={deleteTask}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
