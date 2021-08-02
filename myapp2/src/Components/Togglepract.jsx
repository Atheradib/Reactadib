import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const Togglepract = () => {
  const [colorName, setColorName] = useState("green");
  return (
    <Card>
      <Button
        onClick={() =>
          colorName === "red" ? setColorName("green") : setColorName("red")
        }
      >
        Change Color
      </Button>
      <h1>This is our Website</h1>
      <p>This is our content</p>
      <span style={{ color: colorName }}>
        <h1>PDAC Course</h1>
      </span>
      <Button onClick={() => setColorName("Blue")}>Blue</Button>
    </Card>
  );
};
