import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const GridLayout = () => {
  return (
    <div>
      <Row>
        <Col>
          <input type="text" placeholder="First Name" />
        </Col>
        <Col>
          <input type="text" placeholder="Middle Name" />
        </Col>
        <Col>
          <input type="text" placeholder="Last Name" />
        </Col>
        <Col>
          <Button>Submit</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="number" placeholder="Phone Number" />
        </Col>
        <Col>
          <input type="email" placeholder="E-mail" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="Current Address" />
        </Col>
      </Row>
      <Row>
        <Col>
          <input type="text" placeholder="Permanent Address" />
        </Col>
      </Row>
    </div>
  );
};

export default GridLayout;
