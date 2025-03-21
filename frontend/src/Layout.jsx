import React from 'react'
import {Outlet} from 'react-router-dom'
import Topnav from './components/Topnav'
import Footer from './components/Footer'
import Hadder from './components/Hadder'
import Col from 'react-bootstrap/Col';


const Layout = () => {
  return (
   <>
   <Hadder/>
   <Topnav/>
   <Col style={{backgroundColor: '#E5E8E7', minHeight: '100vh', overflowX: 'hidden'}}>
   <main>
    <Outlet/>
   </main>
   </Col>
   <Footer/>
  
   
   
   </>
  )
}

export default Layout
