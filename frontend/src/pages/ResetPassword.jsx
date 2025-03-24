import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import BASE_URL from '../config/config';
import axios from 'axios';

const ResetPassword = () => {
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [renewpass, setRenewpass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let api = `${BASE_URL}/costumer/changePassword`;
    try {
      const res = await axios.post(api, {
        oldpass: oldpass,
        newpass: newpass,
        renewpass: renewpass,
        userid: localStorage.getItem("userid"),
      });
      console.log(res.data);
      alert("Password changed successfully!"); // Optional: Show success message
    } catch (error) {
      console.log(error);
      alert("Failed to change password. Please try again."); // Optional: Show error message
    }
  };

  return (
    <>
     <Row className="justify-content-center text-center">
  <Col xs={12} sm={8} md={6} lg={6} className="mx-auto mt-5">
    <Card className="shadow-lg border-0"> {/* Add shadow and remove border */}
      <Card.Header className="bg-primary text-white py-3" style={{ fontSize: "25px" }}>
        Reset Password
      </Card.Header>
      <Card.Body className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start"> {/* Add margin-bottom and align text to start */}
            <label className="form-label fw-bold">Enter Old Password:</label>
            <input
              type="password"
              className="form-control"
              value={oldpass}
              onChange={(e) => setOldpass(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fw-bold">Enter New Password:</label>
            <input
              type="password"
              className="form-control"
              value={newpass}
              onChange={(e) => setNewpass(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-start">
            <label className="form-label fw-bold">Re-Enter New Password:</label>
            <input
              type="password"
              className="form-control"
              value={renewpass}
              onChange={(e) => setRenewpass(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
            Submit
          </button>
        </form>
      </Card.Body>
    </Card>
  </Col>
</Row>
    </>
  );
};

export default ResetPassword;