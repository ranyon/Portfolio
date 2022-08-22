import React from 'react'
import './Skills.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Skills =() => {
  return (
    <div id='skills'>
      <div className="SkillContainer" id='skils'>
      <Container>
        <Row>
          <Col>
          <div className='skillLogo'>
          <div className='skillName'></div>
          </div>
          
        
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default Skills;