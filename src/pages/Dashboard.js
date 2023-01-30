import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards";
import { useAuth0 } from "@auth0/auth0-react";
import Clock from "../components/Clock";

const Dashboard = () => {
  const { user } = useAuth0();

  const name = user.nickname.split(".")[0].toUpperCase();
  const weather = {
    title: "Time",
    content: <Clock></Clock>,
    h: "10rem",
    w: "18rem",
    m: "2rem",
  };

  const splitName = (username) => {
    username.splice();
  };
  return (
    <Container fluid="md">
      <Row className="jumbotron">
        <Col className="tiles" id="greeting">
          WELCOME {name}
        </Col>
      </Row>
      <Row className="misc">
        <Col className="tiles" xs lg={7}>
          <Row className="miscCards">
            <Col>
              <Cards data={weather} />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>Calendar</Col>
          </Row>
        </Col>
        <Col xs lg={1}></Col>
        <Col className="tiles" xs lg={4}>
          1 of 2
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
