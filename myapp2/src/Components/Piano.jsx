import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./Piano.css";

export const Piano = () => {
  const handlePlay = () => {
    const audio = new Audio(`Music/${bit}.mp3`);
    audio.play();
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "a" && handlePlay("sa"));
    if (e.key === "s" && handlePlay("re"));
    if (e.key === "d" && handlePlay("ga"));
    if (e.key === "g" && handlePlay("ma"));
    if (e.key === "j" && handlePlay("pa"));
    if (e.key === "k" && handlePlay("dha"));
    if (e.key === "l" && handlePlay("ni"));
    e.stopPropagation();
  });
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>
            <h1 className="h11">Low</h1>
            <Button className="" onClick={() => handlePlay("sa")}>
              Sa
            </Button>
            <Button className="" onClick={() => handlePlay("re")}>
              Re
            </Button>
            <Button className="" onClick={() => handlePlay("ga")}>
              Ga
            </Button>
            <Button className="" onClick={() => handlePlay("ma")}>
              Ma
            </Button>
            <Button className="" onClick={() => handlePlay("pa")}>
              Pa
            </Button>
            <Button className="" onClick={() => handlePlay("dha")}>
              Dha
            </Button>
            <Button className="" onClick={() => handlePlay("ni")}>
              Ni
            </Button>
          </Col>
          <Col md={4}>
            <h1 className="h12">Medium</h1>
            <Button className="" onClick={() => handlePlay("sa")}>
              Sa
            </Button>
            <Button className="" onClick={() => handlePlay("re")}>
              Re
            </Button>
            <Button className="" onClick={() => handlePlay("ga")}>
              Ga
            </Button>
            <Button className="" onClick={() => handlePlay("ma")}>
              Ma
            </Button>
            <Button className="" onClick={() => handlePlay("pa")}>
              Pa
            </Button>
            <Button className="" onClick={() => handlePlay("dha")}>
              Dha
            </Button>
            <Button className="" onClick={() => handlePlay("ni")}>
              Ni
            </Button>
          </Col>
          <Col md={4}>
            <h1 className="h13">High</h1>
            <Button className="" onClick={() => handlePlay("sa")}>
              Sa
            </Button>
            <Button className="" onClick={() => handlePlay("re")}>
              Re
            </Button>
            <Button className="" onClick={() => handlePlay("ga")}>
              Ga
            </Button>
            <Button className="" onClick={() => handlePlay("ma")}>
              Ma
            </Button>
            <Button className="" onClick={() => handlePlay("pa")}>
              Pa
            </Button>
            <Button className="" onClick={() => handlePlay("dha")}>
              Dha
            </Button>
            <Button className="" onClick={() => handlePlay("ni")}>
              Ni
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
