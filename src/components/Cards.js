import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Container>
      <Col md="4">
        <Card
          style={{
            width: "18rem",
            padding: "1rem",
            marginLeft: "1rem",
            border: "1px grey solid",
            borderRadius: "25px",
            boxShadow: "red 2px 3px 6px",
          }}
        >
          <Card.Header>
            <strong>Byline:</strong> {props.byline}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <strong>Movie_title:</strong> {props.title}
            </Card.Title>
            <Card.Text>
              <strong>Headline:</strong> {props.review}
            </Card.Text>
            <Button variant="primary">
              <strong>Critics_pick:</strong> {props.pick}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Cards;
