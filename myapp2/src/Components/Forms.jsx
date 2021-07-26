import React from "react";
import {Row,Col,Form,Card,Button} from "react-bootstrap";

export const Forms = () =>{
    return(
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
                placeholder="First Name"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Control
                type="text"
                placeholder="Last Name"></Form.Control>
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
                placeholder="line 1"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Control
                type="text"
                placeholder="line 2"></Form.Control>
                </Col>
              </Row>
              <Row>
                <Col>
                <Form.Control
                type="text"
                placeholder="City"></Form.Control>
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
                <Col>Ather Adib,</Col>
              </Row>
              <Row>
                <Col>Azad Colony,</Col>
              </Row>
              <Row>
                <Col>Degloor.</Col>
              </Row>
            </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
        </Row>
      
    
    </div>
    )
}
