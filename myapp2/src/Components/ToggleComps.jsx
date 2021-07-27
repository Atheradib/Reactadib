import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const ToggleComps = () => {
  const [colorName, setColorName] = useState("Orange");

  return (
    <div>
      <Card>
        <Button
          onClick={() =>
            colorName === "Blue" ? setColorName("Orange") : setColorName("Blue")
          }
        >
          Change me
        </Button>
        <h3>PickupBiz Here</h3>
        <p>This my content</p>
        <span style={{ color: colorName }}>
          <h1>PDAC Course</h1>
        </span>
        <Button onClick={() => setColorName("Blue")}>Blue</Button>
        <br />
        <Button onClick={() => setColorName("Green")}>Green</Button>
        <br />
        <Button onClick={() => setColorName("yellow")}>yellow</Button>
        <br />
        <Button onClick={() => setColorName("aqua")}>aqua</Button>
      </Card>
    </div>
  );
};
