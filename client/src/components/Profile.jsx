import React from "react";
import { Button, Row, Col, Card, Container } from "react-bootstrap";
import logo from "../logo.svg";

const Profile = ({ userId, name }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{userId}</Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
