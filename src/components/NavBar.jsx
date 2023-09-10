import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Placement <span className="subbrand">Buddy</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Batch">
              <NavDropdown.Item as={Link} to="/previous">
                2023-Batch
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/present">
                2024-Batch
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" >
              About
            </Nav.Link>
            <Nav.Link  as={Link} to="/contact" >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
