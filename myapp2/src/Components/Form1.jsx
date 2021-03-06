import React, { useState } from "react";
import { Row, Col, Form, Card, Button, Image } from "react-bootstrap";
// import { FormsReducer } from "../reducers/FormsReducer";
import "./Form1.css";

export const Form1 = () => {
  //   const { firstName, lastName, lineNo1, lineNo2, CityName } =
  // FormsReducer.Data[0];
  const [fname, setfName] = useState("-");
  const [lname, setlName] = useState("-");
  const [line1, setline1] = useState("-");
  const [line2, setline2] = useState("-");
  const [city, setcity] = useState("-");
  const [bulbstate, setBulbState] = useState("on");
  return (
    <div>
      <Row>
        <Col md={2}>
          <Image
            src={`Assets/bulb${bulbstate}.png`}
            width="100px"
            onClick={() =>
              bulbstate === "off" ? setBulbState("on") : setBulbState("off")
            }
          ></Image>
        </Col>
        {/* {-----------------card1---------------} */}
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Form className="inform">
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          onChange={(e) => setfName(e.target.value)}
                          value={fname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setlName(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Address:</Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="line 1"
                          onChange={(e) => setline1(e.target.value)}
                          value={line1}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="line 2"
                          onChange={(e) => setline2(e.target.value)}
                          value={line2}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          onChange={(e) => setcity(e.target.value)}
                          value={city}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Button variant="primary">Submit</Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* {---------------Card2-----------------} */}
        <Col md={4}>
          <Row>
            <Col>
              <Card className="personinfo">
                <Row>
                  <Col>
                    <h3>{`${fname} ${lname}`}</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>{`${line1} ${line2}`}</Col>
                </Row>
                <Row>
                  <Col>{`${city}`}</Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
