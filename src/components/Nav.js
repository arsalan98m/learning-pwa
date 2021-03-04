import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar variant="light">
      <Navbar.Brand>PWA</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>{" "}
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>{" "}
        <Nav.Link as={Link} to="/users">
          Users
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
