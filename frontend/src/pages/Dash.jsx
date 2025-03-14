import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { IoReorderThreeSharp } from "react-icons/io5"

const Dash = () => {
  const username = localStorage.getItem("username")
  const email = localStorage.getItem("email")
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navi = ()=>{
    navigate("/home")
  }
  return (
   <>
<Button variant="lighter" onClick={handleShow} ><IoReorderThreeSharp /></Button>
  

     
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        

        </Offcanvas.Header>
        <Offcanvas.Body>
             
               
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{display:"block"}}>
          <Nav.Link as={Link} to="profile">MY Profile</Nav.Link>
          <hr />
            <Nav.Link as={Link} to="balance">Balance Inquery</Nav.Link> 
            <hr /> 
            <Nav.Link as={Link} to="account">Account Info</Nav.Link>
            <hr /> 
            <Nav.Link as={Link} to="deposit">Deposit Money</Nav.Link>  
            <hr /> 
            <Nav.Link as={Link} to="withdraw">Withdraw Money</Nav.Link> 
            <hr />
            <Nav.Link as={Link} to="statement">Mini Statement</Nav.Link> 
            <hr />
            <Nav.Link as={Link} to="resetPassword">ResetPassword</Nav.Link>
            <hr />
            <Button onClick={navi} variant="outline-primary">Logout</Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       


        </Offcanvas.Body>
      </Offcanvas>
  
      <Navbar  bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
      <Container className="d-flex justify-content-center align-items-center">
        <Navbar.Brand>
          
          
    <h3 className="text-info ">
       Welcome To International Bank
      </h3>

        </Navbar.Brand>
        <Navbar.Toggle />
     
      </Container>
    </Navbar>

    <Navbar className="bg-body-tertiary">
      <Container className="d-flex justify-content-center align-items-center">
        <Navbar.Brand>
          
          
    <p className="text-info ">
      

       Welcome: {username} | Email: {email}
      </p>

        </Navbar.Brand>
        <Navbar.Toggle />
     
      </Container>
    </Navbar>
        

     
   
   
   
   
   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default Dash
