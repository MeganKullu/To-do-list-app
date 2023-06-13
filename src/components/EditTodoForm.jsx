import { useState } from "react";

const EditTodoForm = ({ task, update }) => {
  const [newTodo, setNewTodo] = useState("task.task");

  const handleSubmit = (e) => {
    e.preventDefault();

    update(newTodo, task.id);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={task}
        placeholder="Update changes"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit" className="to-do-btn">
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;
