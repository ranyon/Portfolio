import React from 'react'
import './Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Home =() => {
  return (
    <div id='home'>
    <div className="HomeContainer" >
      <Container>
        <Row>
          <Col>1</Col>
          <Col>1</Col>
        </Row>
      </Container>
    </div>
  </div>
  )
}

export default Home