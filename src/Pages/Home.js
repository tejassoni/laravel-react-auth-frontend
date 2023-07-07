import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

export default function Home() {
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setShowLoginAlert(true);
    }
  }, []);


  const [item, setItem] = useState (() => {
      const savedItem = localStorage.getItem("user-info");
      const parsedItem = JSON.parse(savedItem);
      return parsedItem || "";
   });

  
  return (
    <Container className="p-3">
      <Container>
        <Row>
          <Col>
            <Alert
              show={showLoginAlert}
              variant="success"
              onClose={() => setShowLoginAlert(false)}
              dismissible
            >
              <Alert.Heading>Success</Alert.Heading>
              <p>Login successfully..!</p>
            </Alert>
          </Col>
        </Row>
        <Row>
          <div>Home Calls { JSON.stringify(item) }</div>
        </Row>
      </Container>
    </Container>
  );
}
