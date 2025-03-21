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

  balance.forEach((e) => {
    if (e.status === "credited") {
      creditedAmount += e.amount;
    }
    if (e.status === "debited") {
      debitedAmount += e.amount;
    }
  });

  netbalance = creditedAmount - debitedAmount;

  return (
    <Container fluid style={{ minHeight: "100vh", padding: "20px" }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={6}>
          <Card className="text-center">
            <Card.Header style={{ backgroundColor: "blue", color: "white" }}>
              <h4>Balance Inquiry</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Row className="mb-3">
                  <div><strong>Credited Amount: {creditedAmount}</strong></div>
                  <div><strong>Debited Amount: {debitedAmount}</strong></div>
                  <hr />
                  <strong>Net Balance: {netbalance}</strong>
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "blue", color: "white" }}>
              National Bank
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BalanceInquery;