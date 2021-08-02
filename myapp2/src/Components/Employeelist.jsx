import React, { useState, useEffect } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import { EmployeeItem } from "./EmployeeItem";
import { FormsReducer } from "../reducers/FormsReducer";
import "./Employee.css";
import { useState } from "react";
import { useEffect } from "react";

export const Employeelist = () => {
  const [empdtl, setempdtl] = useState(FormsReducer.Data);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const filteremp = empdtl.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Design.toLowerCase().includes(searchText.toLowerCase()) ||
        item.Design.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setempdtl(FormsReducer.Data);
    else setempdtl(filteremp);
  }, [searchText]);
  return (
    <div>
      <Card className="employeelist">
        <Row>
          <h3>Employees Info</h3>
          <Form.Control
            type="text"
            placeholder="serach Here"
            onChange={(e) => setSearchText(e.target.value)}
          ></Form.Control>
          {empdtl.map((item) => (
            <Col md={4}>
              <EmployeeItem dataItem={item} />
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
