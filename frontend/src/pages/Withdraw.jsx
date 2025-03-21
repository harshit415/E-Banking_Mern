import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BASE_URL from '../config/config';
import {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


const Withdraw = () => {
   let [amount, setAmount] = useState("")
   const costumerid = localStorage.getItem("userid")
   const handleSubmit = async(e)=>{
      e.preventDefault()
      let api = `${BASE_URL}/costumer/transaction`
      const res = await axios.post(api, {amount:amount, status:"debited", costumerid:costumerid})
      console.log(res.data)
      toast.success("Amount Debited from your account")
   }
  return (
    <>
    <Container>
      <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6} lg={4} className="mx-auto mt-5"> 
      <div className="text-center">
    <h2> Deposite Amount</h2>
  
    <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control type="email" name="amount" value={amount}  onChange={(e)=>setAmount(e.target.value)} />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit" onClick={handleSubmit} >
        Widthdraw
      </Button>
        </div>
        </Col>
        </Row>
        </Container>
        <ToastContainer/>

      
      
    
    
    </>
  )
}

export default Withdraw
