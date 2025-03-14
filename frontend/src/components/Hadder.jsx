import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MdLocalPhone, MdOutlineEmail } from 'react-icons/md';
import { FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';

const Hadder = () => {
  return (
    <>
    
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src="images.png" alt="Logo" width="50%" />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Phone and Email links */}
            <Nav.Link href="#" className="d-flex align-items-center me-3">
              <MdLocalPhone className="me-2" /> +01 235774398
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center me-3">
              <MdOutlineEmail className="me-2" /> mail.@gmail.com
            </Nav.Link>

            {/* Social media icons */}
            <Nav.Link href="#" className="me-3">
              <FaFacebook size={20} />
            </Nav.Link>
            <Nav.Link href="#">
              <FaSquareXTwitter size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Hadder
