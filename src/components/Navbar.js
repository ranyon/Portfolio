import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-scroll';





export const NavBar = () =>{

    
    return(
        <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="home">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'>
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="skills">Skills</Nav.Link>
              <Nav.Link href="project">Projectt</Nav.Link>
            </Nav>
    
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}