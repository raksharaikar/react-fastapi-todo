import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";

import "./List.css";

function AddTodo(props) {
  const [item, setItem] = React.useState("");
  const [validated, setValidated] = useState(false);

  const handleInput = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    
    
    let latest_todos = props.todos;

    let fff = latest_todos.sort((a, b) => b.id - a.id);

    let c =
      props.todos.length == 0
        ? (props.todos.length = 0)
        : (props.todos.length = fff[0].id + 1);

    const newTodo = {
      id: c,
      item: item,
      completed: false,
    };

    fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).then(props.fetchTodos);
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div className="Add-todo">
      <Button
        style={{
          backgroundColor: "#5285EC",
          borderRadius: "8px",
          fontSize: "14px",
        }}
        className
        onClick={handleShow}
      >
        + New task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Card.Title className="crad-title">+ New Task</Card.Title>
        </Modal.Header>

        <Modal.Body>
          <form  onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Task Name"
              aria-label="Task Name"
              onChange={handleInput}
              className="todo-modal-input w-100"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{
              width: "100%",
              padding: "8px 22px",
              backgroundColor: "#5285EC",
              borderRadius: "8px",
              fontSize: "14px",
            }}
            variant="primary"
            onClick={handleSubmit}
          >
            + New Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddTodo;
