import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

export default function Login() {
  async function loginSubmit(e) {
    e.preventDefault();
    let postBody = {
      email: email,
      password: password,
    };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((response) => response.json())
      .then(
        (response) => {
          console.log("ajax response sucess");
          console.log(response);
          if (response.status) {
            // show success alert message
            setShowSuccessMessage(true);
           localStorage.setItem("user-info", JSON.stringify(response.data));
           navigate("/home");
          } else {
            // show error alert message
              setShowErrorMessage(true);
          }
        },
        (error) => {
          console.log("ajax response error");
          console.log(error);
          // show error alert message
          setShowErrorMessage(true);
        }
      );
  }

  function resetSubmit() {
    setEmail("");
    setPassword("");
  }

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
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          <div className="d-block">
            <Button
              variant="primary"
              size="sm"
              type="submit"
              className="mr-10"
              onClick={loginSubmit}
            >
              Submit
            </Button>
            <Button
              variant="info"
              size="sm"
              type="button"
              onClick={resetSubmit}
            >
              Reset
            </Button>
          </div>
        </Form>
      </Container>
    </Container>
  );
}
