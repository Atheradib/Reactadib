import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/ZAMS">
            <Navbar.Brand to="/ZAMS">ZAMS</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/Benefits">Benefits</NavLink>
            <NavLink to="/Sales">Sales</NavLink>
            <NavLink to="/Services">Services</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
