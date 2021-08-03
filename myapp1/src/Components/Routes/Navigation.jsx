import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/Home">
            <Navbar.Brand to="/Home">Home</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/AboutUs">AboutUs</NavLink>
            <NavLink to="/Courses">Courses</NavLink>
            <NavLink to="/EmiCal">EmiCal</NavLink>
            <NavLink to="/ContactUs">ContactUs</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
