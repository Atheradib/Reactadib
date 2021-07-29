import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "./AudioPlayer.css";

export const AudioPlayer = () => {
  const audio = new Audio("Music/nokia.mp3");
  const handleAudioPlay = () => {
    audio.play();
  };
  const handleAudioPause = () => {
    audio.pause();
  };
  return (
    <Card className="player">
      <Row>
        <Col></Col>
        <Col>
          <Button onClick={handleAudioPlay}>Play</Button>
        </Col>
        <Col>
          <Button onClick={handleAudioPause}>Pause</Button>
        </Col>
        <Col>
          <Button onMouseDown={handleAudioPlay} onMouseUp={handleAudioPause}>
            Hold
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Card>
  );
};
