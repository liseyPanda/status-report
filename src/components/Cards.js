import React from "react";
import { Button, Card } from "react-bootstrap";

const Cards = (props) => {
  console.log(`Content: ` + props.data.content);
  console.log(`Title: ` + props.data.title);
  return (
    <Card
      style={{
        width: `${props.data.w}`,
        height: `${props.data.h}`,
        margin: `${props.data.m}`,
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontsize: "30px" }}>{props.data.title}</Card.Title>
        <Card.Text style={{ fontSize: "50px" }}>{props.data.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
