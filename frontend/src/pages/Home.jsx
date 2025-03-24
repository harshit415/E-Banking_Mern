import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';

import Button from 'react-bootstrap/Button';
import { IoMdCheckboxOutline } from "react-icons/io";
import {useNavigate} from 'react-router-dom'




const Home = () => {
  const navigator = useNavigate()
  const navi = () => {
    navigator("/register")
  }
  return (
   <>
   <div style={{
      width: '100%',
      height: window.innerWidth < 768 ? '50vh' : '60vh',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <img
        src="herosection.jpg"
        alt="Hero Section"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    </div>
     <Container>
      {/* Heading */}
      <h3 className="mt-5 text-center">World Class Banking Services</h3>
      <hr />

      {/* Cards Section */}
      <Row className="mt-3">
        {/* Card 1: Mobile Banking */}
        <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
          <Card style={{ width: '18rem',height:"100%" }}>
            <Card.Img style={{width:"60%"}}  variant="top" src="images (1).png" />
            <Card.Body>
              <Card.Title>Mobile Banking</Card.Title>
              <Card.Text>
                Mobile banking refers to the use of a mobile device (smartphone or tablet) to access banking services and perform financial transactions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

             {/* Card 3: Return Strategies */}
             <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
          <Card style={{ width: '18rem', height:"100%", backgroundColor: 'blue', color: 'white' }}>
            <Card.Img style={{width:"60%"}} variant="top" src="163-graph-line-chart-outline-10ef242d.gif" />
            <Card.Body>
              <Card.Title>Return Strategies</Card.Title>
              <Card.Text>
                A strategy is a high-level plan or approach designed to achieve specific goals or objectives under conditions of uncertainty.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2: Saving Account */}
        <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
          <Card style={{ width: '18rem', height:"100%"  }}>
            <Card.Img style={{width:"60%"}} variant="top" src="maintenance-fees.svg" />
            <Card.Body>
              <Card.Title>Saving Account</Card.Title>
              <Card.Text>
                A savings account is a deposit account that earns interest, allowing you to securely store and grow your money.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

   
      </Row>
 

    </Container>
    <Container fluid className="mt-5 pb-3" style={{ backgroundColor: 'aquamarine' }}>
      <Figure className="pt-3 d-flex flex-column flex-md-row align-items-center">
        {/* Image Section */}
        <Figure.Image
          alt="Economy"
          src="OR-DORA-Article-tn.webp"
          className="img-fluid"
          style={{ maxWidth: '100%', height: 'auto' }}
        />

        {/* Caption Section */}
        <Figure.Caption className="my-auto px-3 text-center text-md-start">
          <h3>Building A More Compact For <br />Our Future Economy</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam totam dignissimos sequi. Provident consequuntur itaque praesentium! Facere modi fugiat odit corrupti est quo aperiam hic eos repudiandae, ab illo harum.
          </p>
          <div>
          <Button className="mx-2" variant="light"> <IoMdCheckboxOutline />   Banking Solution </Button>
          <Button variant="light"><IoMdCheckboxOutline />   Industry Experties</Button>
          </div> <br />
          <Card>
         
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          Experience the future of banking with our e-banking services – where convenience meets security. Whether you're at home, at work, or on the go, our digital platform.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      
      </Card.Body>
    </Card>
    <br />

    <div style={{display: "flex", justifyContent: "center"}}>
  <Button onClick={navi} variant="warning">Apply For Account</Button>
</div>
        </Figure.Caption>
      </Figure>
    </Container>
   </>
  )
}

export default Home
