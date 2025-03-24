import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import BASE_URL from '../config/config';
import axios from 'axios';

const BalanceInquery = () => {
  const [balance, setBalance] = useState([]);
  let creditedAmount = 0;
  let debitedAmount = 0;
  let netbalance = 0;

  const loadData = async () => {
    let api = `${BASE_URL}/costumer/balance/?userid=${localStorage.getItem("userid")}`;
    const res = await axios.get(api);
    console.log(res.data);
    setBalance(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  balance.map((e) => {
    if (e.status === "credited") {
      creditedAmount += e.amount;
    }
    if (e.status === "debited") {
      debitedAmount += e.amount;
    }
  });

  netbalance = creditedAmount - debitedAmount;

  return (
    <Container fluid style={{ padding: "50px 20px"}}>
    <Row className="justify-content-center">
      <Col xs={12} sm={10} md={8} lg={6}>
        <Card className="shadow-lg border-0" style={{ backgroundColor: "#010114", color: "white", borderRadius: "15px" }}>
          <Card.Body className="p-3 p-md-4 text-center">
            <h2 className="mb-3 mb-md-4" style={{ fontWeight: "bold", color: "#ffffff", fontSize: "24px" }}>
              Balance Inquiry
            </h2>
            <hr style={{ borderTop: "2px solid #ffffff", opacity: "0.2", margin: "1rem 0" }} />
            <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
              <div className="text-center text-md-start mb-3 mb-md-0">
                <h5 style={{ color: "#00ff00", fontWeight: "bold", fontSize: "18px" }}>Credited</h5>
                <p style={{ fontSize: "18px", fontWeight: "500" }}>{creditedAmount}</p>
              </div>
              <div className="text-center text-md-end">
                <h5 style={{ color: "#ff0000", fontWeight: "bold", fontSize: "18px" }}>Debited</h5>
                <p style={{ fontSize: "18px", fontWeight: "500" }}>{debitedAmount}</p>
              </div>
            </div>
            <div className="mt-3 mt-md-4">
              <h4 style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>Net Balance</h4>
              <p style={{ fontSize: "22px", fontWeight: "600", color: "#00ff00" }}>{netbalance}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default BalanceInquery;