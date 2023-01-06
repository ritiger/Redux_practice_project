import { useState } from "react";
import AddTodo from "./AddTodo";

const AddTodoButton = () => {
  const [todoAdded, setTodoAdded] = useState(false);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const openTodoForm = () => {
    if (todoAdded) {
    }
  };
  return (
    <>
      <button className="btn btn-primary" onClick={() => openTodoForm}>
        +ADD TODO
      </button>
      {showTodoForm && <AddTodo />}
    </>
  );
};

export default AddTodoButton;
