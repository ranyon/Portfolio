import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useRef } from 'react';
import './NavBar.css';
import { useState } from 'react';





export const NavBar = () =>{
  const[navbar,setNavbar]= useState(false)

  const changeBackground=()=>{
    if(window.scrollY >= 80){
      setNavbar(true)
    }  else{
      setNavbar(false);
    }

  }
window.addEventListener('scroll',changeBackground)
  return(
    <Navbar sticky="top" expand="lg" className={navbar ? 'navbar-active '  :'navbar'}>
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto '>
              <Nav.Link href='#home' >Home</Nav.Link>
              <Nav.Link  href='#skills'>Skills</Nav.Link>
              <Nav.Link  href='#projects'>Projects</Nav.Link>
            </Nav>
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
