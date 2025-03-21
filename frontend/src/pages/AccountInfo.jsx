import React from 'react'
import {useState, useEffect} from 'react'
import BASE_URL from '../config/config'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const AccountInfo = () => {
  const [apidata, setApidata] = useState([])
  const loadData = async() =>{
    let api = `${BASE_URL}/costumer/balance/?userid=${localStorage.getItem("userid")}`;

    const res = await axios.get(api)
    setApidata(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
          loadData()
  },[])
  return (
   <>
     <Row  className='justify-content-center text-center'>
      <Col sm={12} md={6} lg={10} >
      <div>
     <Table striped bordered hover responsive style={{ backgroundColor: 'black' }} >
      <thead>
        <tr>
          <th>Sno.</th>
          <th >Credited</th>
          <th>Debited</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        { apidata.map((e,index)=>(
                   <tr key={index}>
                   <td>{index+1}</td>
                   <td>{e.status==='credited'? e. amount: ''}</td>
                   <td>{e.status==='credited'? e. amount: ''}</td>
                   <td>{e.status}</td>
                   <td>{e.date}</td>
         
                 </tr>
                
        ))
       
      }
      </tbody>
    
    </Table>
    </div>
    </Col>
    </Row>
    </>
  )
}

export default AccountInfo
