import React from 'react'
import {useState, useEffect} from 'react'
import BASE_URL from '../config/config'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment'


const AccountInfo = () => {
  const [apidata, setApidata] = useState([])
  const loadData = async() =>{
    let api = `${BASE_URL}/costumer/accountStatement/?userid=${localStorage.getItem("userid")}`;

    const res = await axios.get(api)
    setApidata(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
          loadData()
  },[])
  let creditedAmount = 0;
  let debitedAmount = 0;
  let netbalance = 0;
 
  return (
   <>
  
  <h2 className="text-center mt-3">Mini Statement</h2>
<hr
  
/>
     <Row  className='justify-content-center text-center mt-3'>
      <Col sm={12} md={6} lg={10} >
      <div>
      
     
     <Table striped bordered hover responsive  >
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
      { apidata.map((e, index) => (
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

export default AccountInfo
