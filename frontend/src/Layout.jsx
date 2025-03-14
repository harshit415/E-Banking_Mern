import React from 'react'
import {Outlet} from 'react-router-dom'
import Topnav from './components/Topnav'
import Footer from './components/Footer'
import Hadder from './components/Hadder'

const Layout = () => {
  return (
   <>
   <Hadder/>
   <Topnav/>
   <main>
    <Outlet/>
   </main>
   <Footer/>
   
   
   
   </>
  )
}

export default Layout
