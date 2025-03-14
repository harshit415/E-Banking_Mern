import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react'
import BASE_URL from '../config/config';
import axios from 'axios'
import {Outlet, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
const Login = () => {
  const [input, setInput] = useState({})
  const [isloading, setIsloading] = useState(true)
  const navi = useNavigate()
  const handleInput = (e) =>{
    let {name , value} = e.target
    setInput({
      ...input,
      [name]:value
    })
    console.log(input)
  }
  const submitHandler = async(e) => {
    e.preventDefault()
    let api = `${BASE_URL}/costumer/login`
    try {
      const res = await axios.post(api, input)
      console.log(res.data)
     
      localStorage.setItem("username", res.data.name+"")
      localStorage.setItem("userid", res.data._id)
      localStorage.setItem("email", res.data.email)
      toast.success("Login Successfully")
      navi("/dashBoard")
    } catch (error) {
      console.log(error)
    }
    

  }
 
  return (
   <>
   
   <Container>
    <Row>
      <Col xs={12} sm={10} md={8} lg={6} xl={8} className="mx-auto mt-5"> 
    <Card  className="text-center">
      <Card.Header style={{backgroundColor:"blue", color:"white"}}> <h4> Account Registration Form</h4></Card.Header>
      <Card.Body>
       
        <Card.Text>
    
        <Form>
      <Row className="mb-3">
      

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleInput} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleInput}/>
      </Form.Group>
      </Row>

     

   
      <Button variant="primary" type="submit" onClick={submitHandler} >
      
        Submit
      </Button>
    </Form>
        
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:"blue", color:"white"}} >National Bank</Card.Footer>
    </Card>
    </Col>
    </Row>
    </Container>
    <ToastContainer />

   

   
   
   
   </>
  )
}

export default Login
