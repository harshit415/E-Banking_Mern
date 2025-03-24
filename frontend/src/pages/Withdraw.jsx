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
   <Container fluid >
  
   <h2 className="text-center">Instantly Widthdraw money</h2>
<hr />
      <Row className="justify-content-center">
      <Col xs={12} sm={8} md={6} lg={6} className="mx-auto mt-5"> 
      <Card className="pt-2" style={{paddingBottom:"20px", backgroundColor:"#010114", color:"white"}}>
      <div className="text-center">
    <h2> Withdraw Amount</h2>
  <hr />
    <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control style={{ backgroundColor:"#010114", color:"white", width:"70%", margin:"auto"}} type="email" name="amount" value={amount}  onChange={(e)=>setAmount(e.target.value)} />
        </Form.Group>
        <Button className="mt-3" variant="outline-light" type="submit" onClick={handleSubmit}>Widthdraw</Button>

        </div>
        </Card>
        </Col>
        </Row>
        <ToastContainer/>

        </Container>

      
      
    
    
    </>
  )
}

export default Withdraw
