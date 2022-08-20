import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useRef } from 'react';





export const NavBar = ({forwardedRef}) =>{
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
 
  const scrollToSection = (elementRef) =>{
    window.scrollTo({
      top:elementRef.current.offsetTop,
      behavior:'smooth'
    })
  }
    return(
        <Navbar sticky="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
              <Nav.Link href='#home' >Home</Nav.Link>
              <Nav.Link  href='#skills'>Skills</Nav.Link>
              <Nav.Link  href='#projects'>Projectt</Nav.Link>
            </Nav>
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}