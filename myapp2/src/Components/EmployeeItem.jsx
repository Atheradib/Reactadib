import React from "react";
import { Card, Image } from "react-bootstrap";

export const EmployeeItem = ({ dataItem }) => {
  return (
    <Card className="employeeItem">
      <h4>Employee Id</h4>
      <Image src={`${dataItem.cardImage}`} alt=""></Image>
      <span>FullName :{`${dataItem.firstName} ${dataItem.lastName}`}</span>
      <span>Designation :{`${dataItem.Design}`}</span>
      <span>salary :{`${dataItem.Salary}`}</span>
    </Card>
  );
};
