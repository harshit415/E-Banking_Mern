import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import {useState} from 'react'
import BASE_URL from '../config/config';
import axios from'axios'
import moment from 'moment'





const MiniStatement = () => {
  const [beginDate, setBeginDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [mydata, setMydata] = useState([])
  const handleSubmit =async() =>{
    let api = `${BASE_URL}/costumer/miniStatement`;
    try {
      const res = await axios.post(api,{userid:localStorage.getItem("userid"), beginDate:beginDate, endDate:endDate})
      console.log(res.data)
      setMydata(res.data)
    } catch (error) {
      
    }

  }
 

  return (
    <>
    <h2 className="text-center">Mini Statement</h2>
    <hr />
    <Row className="justify-content-center text-center">
      <Col sm={12} md={8} lg={6}>
      <Card body style={{backgroundColor:"#010114", color:"white"}}> 
        Enter Begining Date: <input type="date"  value={beginDate} onChange={(e)=>{setBeginDate(e.target.value)}} /> &nbsp;
        Enter End Date :  <input type="date"  value={endDate} onChange={(e)=>{setEndDate(e.target.value)}} /> 
      
        <hr />
        <Button style={{backgroundColor:"orange"}} onClick={handleSubmit} variant="outline-light">Search</Button>
      </Card>
      
       
   
      </Col>
    </Row>
    
    <Row  className='justify-content-center text-center mt-3'>
      <Col sm={12} md={6} lg={10} >
      <div>
     <Table striped bordered hover responsive style={{ backgroundColor: 'black' }} >
      <thead>
        <tr>
          <th style={{backgroundColor:"#FCBF49"}}>Sno.</th>
          <th style={{backgroundColor:"#FCBF49"}}>Credited</th>
          <th style={{backgroundColor:"#FCBF49"}}>Debited</th>
          <th style={{backgroundColor:"#FCBF49"}}>Status</th>
          <th style={{backgroundColor:"#FCBF49"}}>Date</th>
        </tr>
      </thead>
      <tbody>
      { mydata.map((e, index) => (
    <tr key={index}>
        <td style={{backgroundColor:"#EAE2B7"}}>{index + 1}</td>
        <td style={{backgroundColor:"#EAE2B7"}}>{e.status === 'credited' ? e.amount : ''}</td>
        <td style={{backgroundColor:"#EAE2B7"}}>{e.status === 'debited' ? e.amount : ''}</td>
        <td style={{backgroundColor:"#EAE2B7"}}>{e.status}</td>
        <td style={{backgroundColor:"#EAE2B7"}}>{moment(e.date).format('MMMM Do YYYY')}</td>
    </tr>
))}
      </tbody>
    
    </Table>
    </div>
    </Col>
    </Row>
    
    </>
  )
}

export default MiniStatement
