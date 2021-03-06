import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <>
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <Card
            style={{
              width: "18rem",
              height: "auto",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "12px",
            }}
            className="d-flex pb-2"
          >
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                <input
                  className="todo-modal-input mt-2 w-100"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  className="todo-modal-input mt-2 w-100"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Card.Text>
              <Button
                block
                style={{
                  backgroundColor: "#5285EC",
                  borderRadius: "8px",
                  fontSize: "14px",
                }}
                className="btn"
                variant="primary"
                type="submit"
              >
                Login
              </Button>
            </Card.Body>
          </Card>
        </form>


      </div>
    </>
  );
}

export default Login;
