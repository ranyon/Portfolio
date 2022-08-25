import React from "react";
import "./Skills.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = ({ skillLogo, skillName }) => {
  const skills=[
    {skillLogo:'HTML',skillName:'html'},
    {skillLogo:'CSS',skillName:'css'},
    {skillLogo:'JAVASCRIPT',skillName:'js'},
    {skillLogo:'REACT',skillName:'react'},
    {skillLogo:'REACT-NATIVE',skillName:'react-native'}
   ]



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="skills" className='SkillContainer'>
      <Container>
        <Row>
          <Col>
         {
          skills.map((skill) =>(
            <div skillLogo={skill.skillLogo} skillName={skill.skillName}>
              <h1>{skillLogo}</h1>
              <p>{skillName}</p>
            </div>
          ))
         }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
