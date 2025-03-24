import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IoReorderThreeSharp } from "react-icons/io5";

const Dash = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const navi = () => {
    navigate("/home");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container fluid style={{ backgroundColoe:"#E5E8E7", padding: 0, overflowX: 'hidden' }}>
     
      {/* Full-width Main Navbar */}
      <Navbar expand="lg" style={{ backgroundColor: '#010114', fontSize: "25px", width: '100%', padding:"20px" }}>
        <Container style={{color:'#B5B8B7'}}>
          National Bank
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
         <span style={{fontSize:"large"}}>Name: {username}</span> 
          <Button variant="outline-light" onClick={toggleSidebar} className="d-lg-none">
            <IoReorderThreeSharp />
          </Button>
        </Container>
      </Navbar>

      {/* Sidebar and Main Content */}
      <Row>
        {/* Sidebar */}
        <Col md={2} style={{ backgroundColor: '#010114', minHeight: '100vh', padding: '20px', display: sidebarOpen ? 'block' : 'none' }} className="d-lg-block">
          <Navbar expand="lg" style={{ backgroundColor: '#010114' }}>
            <Nav className="me-auto" style={{ display: "block", color: '#fff' }}>
              <Nav.Link as={Link} to="profile" style={{ color: '#fff' }}>MY Profile</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Nav.Link as={Link} to="balance" style={{ color: '#fff' }}>Balance Inquiry</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Nav.Link as={Link} to="account" style={{ color: '#fff' }}>Account Info</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Nav.Link as={Link} to="deposit" style={{ color: '#fff' }}>Deposit Money</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Nav.Link as={Link} to="withdraw" style={{ color: '#fff' }}>Withdraw Money</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Nav.Link as={Link} to="ministatement" style={{ color: '#fff' }}>Mini Statement</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Nav.Link as={Link} to="resetPassword" style={{ color: '#fff' }}>Reset Password</Nav.Link>
              <hr style={{ borderColor: '#444' }} />
              <Button onClick={navi} variant="outline-light" style={{ width: '100%' }}>Logout</Button>
            </Nav>
          </Navbar>
        </Col>

        {/* Main Content */}
        <Col style={{ padding: '20px', backgroundColor: '#E5E8E7', height: '100vh', overflowX: 'hidden' }}>
          <main>
            <Outlet /> {/* This will render the BalanceInquery component */}
          </main>
        </Col>
      </Row>
    </Container>
  );
};

export default Dash;