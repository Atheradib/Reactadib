import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form } from "react-bootstrap";
import "./Employee.css";
import { EmployeeChild } from "./EmployeeChild";
import { FormReducer } from "../reducers/FormReducer";

export const EmployeeParent = () => {
  const [empArr, setEmpArr] = useState(FormReducer.Data);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const filterArr = empArr.filter(
      (item) =>
        item.employeeName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchText.toLowerCase()) ||
        item.salary.toLowerCase().includes(searchText.toLowerCase())
    );
    if (searchText === "") setEmpArr(FormReducer.Data);
    else setEmpArr(filterArr);
  }, [searchText]);
  return (
    <Card className="employeelist">
      <h2>I am Parent</h2>
      <Form.Control
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
      ></Form.Control>
      <Row>
        {empArr.map((item) => (
          <Col md={4}>
            <EmployeeChild kuchbhi={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
