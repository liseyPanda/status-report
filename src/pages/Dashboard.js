import React from 'react';
import Form from '../pages/Form';
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import Cards from '../components/Cards'
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const {user} =  useAuth0();
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2,0);
  const min = `${now.getMinutes()}`.padStart(2,0);
  const t = `${hour}:${min}`;
  console.log(`The time is: ${hour}:${min}`)

  const weather = {
    "title": "Time",
    "time": `${t}`,
    "h": '10rem',
    "w": '10rem',
    "m": '2rem'
  }
    return (
        <Container fluid="md">
          <Row className="jumbotron">
            <Col className="tiles" id="greeting">WELCOME {user.nickname}</Col>
          </Row>
          <Row className="misc">
            <Col className="tiles" xs lg={7}>
              <Row className="miscCards">
                <Col><Cards data={weather}/></Col>
                <Col>1 of 1</Col>
              </Row>
              <Row>
                <Col>Calendar</Col>
              </Row>
              </Col>
            <Col xs lg={1}></Col>
            <Col className="tiles" xs lg={4}>1 of 2</Col>
          </Row>
        </Container>
      );
};

export default Dashboard;