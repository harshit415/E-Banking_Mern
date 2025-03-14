import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Topnav = () => {
  return (
   <>
   
   <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#">E-Banking</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="register">Registration</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>

           
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
   
   
   
   </>
  )
}

export default Topnav
