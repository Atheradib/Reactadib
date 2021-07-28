import React from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "./EmiCal.css";

export const EmiCal = () => {
  return (
    <div>
      <Card className="Calc">
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="principle Amount" />
          </Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Number of Year" />
          </Col>
          <Col md={3}>
            <Form.Control type="text" placeholder="Rate of Interest" />
          </Col>
          <Col md={2}>
            <Button Variant="primary">EMI Cal-C</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
