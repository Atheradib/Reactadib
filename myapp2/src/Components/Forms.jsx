import React, { useState } from "react";
import { Row, Col, Form, Card, Button } from "react-bootstrap";
import { FormsReducer } from "../reducers/FormsReducer";

export const Forms = () => {
  const { firstName, lastName, lineNo1, lineNo2, CityName } =
    FormsReducer.Data[0];
  const [fname, setfName] = useState(firstName);
  const [lname, setlName] = useState(lastName);
  const [line1, setline1] = useState(lineNo1);
  const [line2, setline2] = useState(lineNo2);
  const [city, setcity] = useState(CityName);
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Form>
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
                          value={CityName}
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Row>
            <Col>
              <Button variant="primary">Submit</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
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
