import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

export default function Logout() {
 

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  return (
    <Container className="p-3">
      <Container>
        <Row>
          <Col>
            <Alert show={showSuccessMessage} variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
              <Alert.Heading>Success</Alert.Heading>
              <p>Thanks for the message!</p>
            </Alert>
            <Alert show={showErrorMessage} variant="danger" onClose={() => setShowErrorMessage(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Change this and that and try again...!</p>
            </Alert>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
