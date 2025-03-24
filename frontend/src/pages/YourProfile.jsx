import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaUserCircle, FaEnvelope, FaEdit } from 'react-icons/fa'; // Importing icons from Font Awesome

const YourProfile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card className="text-center mt-5" style={{ width: '24rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Card.Body>
          {/* Profile Picture Placeholder */}
          <div className="mb-3">
            <FaUserCircle size={80} className="text-primary" />
          </div>

          {/* Username */}
          <Card.Title className="mb-3">
            <h3>{username}</h3>
          </Card.Title>

          {/* Email */}
          <Card.Text className="mb-4">
            <FaEnvelope className="me-2" />
            {email}
          </Card.Text>

          {/* Edit Profile Button */}
          <Button variant="primary" className="mb-3">
            <FaEdit className="me-2" />
            Edit Profile
          </Button>

          {/* Additional Info */}
          <Card.Text className="text-muted">
            Member since: January 2023
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default YourProfile;