import React from "react";
import { Card, Form } from "react-bootstrap";
import { candidateData } from "../reducers/candidateData";
import "./DynamicComp.css";

export const DynamicComp = () => {
  return (
    <Card className="dyncom">
      {Object.keys(candidateData).map((key) => (
        <p>
          {key}
          <Form.Control
            type={candidateData[key].type}
            value={candidateData[key].data}
            placeholder={candidateData[key].placeholder}
          ></Form.Control>
        </p>
      ))}
    </Card>
  );
};
