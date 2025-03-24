import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container className="py-4">
        <Row>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><div className="text-white">About Us</div></li>
              <li><div className="text-white">Services</div></li>
              <li><div className="text-white">Contact Us</div></li>
              <li><div className="text-white">Privacy Policy</div></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Customer Support</h5>
            <ul className="list-unstyled">
              <li><div className="text-white">FAQ</div></li>
              <li><div className="text-white">Support Center</div></li>
              <li><div className="text-white">Feedback</div></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <div className="text-white me-3"><FaFacebook size={24} /></div>
              <div className="text-white me-3"><FaTwitter size={24} /></div>
              <div className="text-white me-3"><FaLinkedin size={24} /></div>
              <div className="text-white"><FaInstagram size={24} /></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} National Bank. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

// 5Oe0P0jHLQxh4vYJ