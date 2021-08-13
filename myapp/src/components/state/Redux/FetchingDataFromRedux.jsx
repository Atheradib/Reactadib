import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getAllGroups } from "../selector/Selector";
import { useSelector } from "react-redux";

export const FetchingDataFromRedux = () => {
  const selector = useSelector(getAllGroups);
  const [data, setData] = useState(selector);
  return (
    <div>
      {data.map((item) => {
        return (
          <Card>
            <Card.Title>Name: {item.Name}</Card.Title>
            <Card.Body>Age: {item.AGE}</Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
