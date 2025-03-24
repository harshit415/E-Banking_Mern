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


const DepositCash = () => {
   let [amount, setAmount] = useState("")
   const costumerid = localStorage.getItem("userid")
   const handleSubmit = async(e)=>{
      e.preventDefault()
      let api = `${BASE_URL}/costumer/transaction`
      const res = await axios.post(api, {amount:amount, status:"credited", costumerid:costumerid})
      console.log(res.data)
      toast.success("Amount Credited")
   }
  return (
    <>
    <Container fluid >
    <Col className="px-4" sm={12} md={12} lg={12}>
  <h2 className="text-center mt-2">Fixed Deposit - Features and Benefits of National bank.</h2>
  <Card className="mt-3" style={{ backgroundColor: "#ff4b33" }}>
    <Card.Body
      className="d-flex flex-wrap justify-content-center gap-3 p-3" // Bootstrap classes for flexbox and spacing
    >
      {/* Feature 1: Assured Returns */}
      <div className="feature-item text-center p-3" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
        <Card.Title>
          <img src="/assured.svg" alt="Assured Returns" className="img-fluid" /> {/* Ensure images are responsive */}
          <br />
          Assured Returns
        </Card.Title>
        <Card.Text>
          A simple investment fixed deposit product that offers safety, liquidity, and flexibility.
        </Card.Text>
      </div>

      {/* Feature 2: Instant FD Creation */}
      <div className="feature-item text-center p-3" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
        <Card.Title>
          <img src="/fd-instant.svg" alt="Instant FD Creation" className="img-fluid" />
          <br />
          Instant FD Creation
        </Card.Title>
        <Card.Text>
          Now create an FD online anytime, anywhere within 60 seconds.
        </Card.Text>
      </div>

      {/* Feature 3: Instant Liquidity */}
      <div className="feature-item text-center p-3" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
        <Card.Title>
          <img src="/liquidity.svg" alt="Instant Liquidity" className="img-fluid" />
          <br />
          Instant Liquidity
        </Card.Title>
        <Card.Text>
          Avail an OD (Overdraft) up to 90% of FD value in case of emergencies.
        </Card.Text>
      </div>

      {/* Feature 4: Flexible Tenure */}
      <div className="feature-item text-center p-3" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
        <Card.Title>
          <img src="/flexible.svg" alt="Flexible Tenure" className="img-fluid" />
          <br />
          Flexible Tenure
        </Card.Title>
        <Card.Text>
          Plan your investment as per your goal. Flexible tenure that ranges from 7 days to 10 years.
        </Card.Text>
      </div>
    </Card.Body>
  </Card>
</Col>
<hr />

<h2 className="text-center mt-5">Deposite Money in Seconds</h2>
      <Row className="justify-content-center">
  
      <Col xs={12} sm={8} md={8} lg={6} className="mx-auto mt-3"> 
      <Card className="pt-2" style={{paddingBottom:"20px", backgroundColor:"#010114", color:"white"}}>
      <div className="text-center">
    <h2> Deposite Amount</h2>
  <hr  />
    <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Amount</Form.Label>
          <Form.Control style={{ backgroundColor:"#010114", color:"white", width:"70%", margin:"auto"}} type="email" name="amount" value={amount}  onChange={(e)=>setAmount(e.target.value)} />
        </Form.Group>
       
      <Button className="mt-3" variant="outline-light" type="submit" onClick={handleSubmit}>Deposite</Button>

        </div>
        </Card>
        </Col>
        </Row>
        <ToastContainer/>

        </Container>
       
       
      
    
    
    </>
  )
}

export default DepositCash
