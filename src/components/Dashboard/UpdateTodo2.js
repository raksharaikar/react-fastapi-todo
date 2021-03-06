import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { ReactComponent as Edit } from "../../assets/pen-solid.svg";
import "./List.css";

function UpdateTodo2({ item, id, fetchTodos }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [todo, setTodo] = useState(item);

  const updateTodo = async () => {
    await fetch(`http://localhost:8000/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: todo }),
    });

    handleClose();
    await fetchTodos();
  };

  return (
    <>
      
      
      <div>
        <Button
          style={{ backgroundColor: "transparent", border: "none" }}
          className="p-2"
          variant="light"
          onClick={handleShow}
        >
          <Edit />
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Card.Title className="crad-title">- Update Task</Card.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Add a todo item"
            aria-label="Add a todo item"
            className="todo-modal-input w-100"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              backgroundColor: "#5285EC",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            variant="primary"
            onClick={updateTodo}
          >
            Update Todo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateTodo2;
