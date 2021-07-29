import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./Piano.css";

export const Piano = () => {
  const handlePlay = () => {
    const audio = new Audio(`Music/${bit}.mp3`);
    audio.play();
  };
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>
            <h1 className="h11">Low</h1>
            <Button className="">Sa</Button>
            <Button className="">Re</Button>
            <Button className="">Ga</Button>
            <Button className="">Ma</Button>
            <Button className="">Pa</Button>
            <Button className="">Dha</Button>
            <Button className="">Ni</Button>
          </Col>
          <Col md={4}>
            <h1 className="h12">Medium</h1>
            <Button className="">Sa</Button>
            <Button className="">Re</Button>
            <Button className="">Ga</Button>
            <Button className="">Ma</Button>
            <Button className="">Pa</Button>
            <Button className="">Dha</Button>
            <Button className="">Ni</Button>
          </Col>
          <Col md={4}>
            <h1 className="h13">High</h1>
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
