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
    <Navbar style={{display:"flex",justifyContent:"space-around",width:"100%"}}expand="lg" className="bg-body-tertiary">
      <Container fluid style={{display:"flex", width:"100%",justifyContent:"space-evenly"}}>
        <Navbar.Brand href="#"><NavLink to= "Checkout">Productos</NavLink></Navbar.Brand>
        <Navbar.Brand href=""><NavLink to= "poker">Poker</NavLink></Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"navbarScroll>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bootnav;