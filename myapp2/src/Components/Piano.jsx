import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./Piano.css";

export const Piano = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>
            <Button className="">Sa</Button>
            <Button className="">Re</Button>
            <Button className="">Ga</Button>
            <Button className="">Ma</Button>
            <Button className="">Pa</Button>
            <Button className="">Dha</Button>
            <Button className="">Ni</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
