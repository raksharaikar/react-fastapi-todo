import React from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as Delete } from "../../assets/trash-solid.svg";

function DeleteTodo({ id, fetchTodos }) {
  const deleteTodo = async () => {
    await fetch(`http://localhost:8000/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { id: id },
    });
    await fetchTodos();
  };

  return (
    <div>
      <Button
        style={{ backgroundColor: "transparent", border: "none" }}
        variant="light"
        className="p-2"
        onClick={deleteTodo}
      >
        <Delete />
      </Button>
    </div>
  );
}

export default DeleteTodo;
