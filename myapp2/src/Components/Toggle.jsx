import react, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const Toggle = () => {
  const [colorName, setColorNAme] = useState("red");
  return (
    <Card>
      <Button
        onClick={() =>
          colorName === "orange" ? setColorNAme("red") : setColorNAme("orange")
        }
      >
        Change Me
      </Button>

      <h1>This is our Website</h1>
      <p>This is our content</p>
      <span style={{ color: colorName }}>
        <h1>PDAC Course</h1>
      </span>
      <Button onClick={() => setColorNAme("aqua")}>Aqua</Button>
    </Card>
  );
};
