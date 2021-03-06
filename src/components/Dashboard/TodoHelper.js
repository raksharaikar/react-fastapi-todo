import React from "react";
import UpdateTodo2 from "./UpdateTodo2";
import DeleteTodo from "./DeleteTodo";
import { Row, Col } from "react-bootstrap";

function TodoHelper({ item, id, completed, handle, fetchTodos }) {
  return (
    <div>
      <Row>
        <Col className="d-flex flex-row d-flex align-items-center">
          <input
            key={id}
            className="form-check-input me-1"
            onClick={(e) => handle(id)}
            onChange={e => {}}
            checked={completed}
            type="checkbox"
          />
          <h5
            style={{
              color: "#5285EC",
              textDecoration: completed ? "line-through" : "none",
            }}
            className="m-0"
          >
            {item}
          </h5>
        </Col>
        <Col className="d-flex flex-row justify-content-end">
          <UpdateTodo2 item={item} id={id} fetchTodos={fetchTodos} />
          <DeleteTodo id={id} fetchTodos={fetchTodos} />
        </Col>
      </Row>
    </div>
  );
}

export default TodoHelper;
