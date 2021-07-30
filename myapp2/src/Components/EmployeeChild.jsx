import React from "react";
import { Card, Image } from "react-bootstrap";

export const EmployeeChild = ({ kuchbhi }) => {
  return (
    <Card className="employeeItem">
      <h4>Employee Item</h4>
      <Image src={`${kuchbhi.cardImage}`}></Image>
      <span>Name: {`${kuchbhi.employeeName}`}</span>
      <span>Designation : {`${kuchbhi.designation}`}</span>
      <span>Salary : {`${kuchbhi.salary}`}</span>
    </Card>
  );
};
