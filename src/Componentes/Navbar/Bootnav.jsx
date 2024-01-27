import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,NavLink } from 'react-router-dom';
import { Item } from '../Item/Item';



function Bootnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{display:"flex"}}>
        <Navbar.Brand href="#"><NavLink to= "producto">Productos</NavLink></Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"navbarScroll>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bootnav;