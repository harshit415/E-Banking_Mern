import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import axios from 'axios';
import BASE_URL from '../config/config';
import { ToastContainer, toast } from 'react-toastify'


const Registration = () => {
 const [input, setInput] = useState({})
 const handleInput = (e) => {
   let {name, value} = e.target
   setInput({...input,
    [name]: value
   })
  }
  console.log(input)
  const handleSubmit = async (e) => {
       e.preventDefault()
       let api = `${BASE_URL}/costumer/register`
       try {
        const res = await axios.post(api , input)
        console.log(res)
         toast.success("Registration Sucessfully")
        
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
       
        
    
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleInput} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridNumber">
          <Form.Label>Enter Mobile no</Form.Label>
          <Form.Control type="text" name="number" onChange={handleInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDate">
          <Form.Label>Enter Date of birth</Form.Label>
          <Form.Control type="date" name="date" onChange={handleInput} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Enter Residental Address</Form.Label>
        <Form.Control type="text" name="address"  onChange={handleInput} />
      </Form.Group>
    
         
          
    


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" onChange={handleInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name="state" onChange={handleInput}>
         
    <option value="">Choose...</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>


          </Form.Select>
        </Form.Group>

      
      </Row>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        
       
      </Card.Body>
      <Card.Footer style={{backgroundColor:"blue", color:"white"}} >National Bank</Card.Footer>
    </Card>
    </Col>
    </Row>
            <ToastContainer/>
    
    </Container>
   
   </>
  )
}

export default Registration
