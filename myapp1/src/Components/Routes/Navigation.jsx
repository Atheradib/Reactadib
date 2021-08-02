import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

export const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
            <Nav.Link href="/Courses">Courses</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
