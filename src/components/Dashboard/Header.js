import React from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import "./Header.css";
function Header(props) {
  const logOutHandle = () => {
    props.setToken(false);
  };

  return (
    <Navbar className="nav p-0">
      <Container className="px-3">
        <Navbar.Brand href="#home">
          <img
            width="50px"
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          ></img>
          Ali
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button onClick={logOutHandle} variant="light">
              Logout
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
