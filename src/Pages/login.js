import React,{useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login(){

  function loginSubmit(e) {
    e.preventDefault();
       console.log('loginSubmit :: ',email,password);
       return false;
  }

  function resetSubmit() {
    console.log('resetSubmit :: ');
}

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
return ( <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <div className='d-block'>
  <Button variant="primary" size="sm" type="submit" className="mr-10" onClick={loginSubmit}>
    Submit
  </Button>
  <Button variant="info" size="sm" type="button" onClick={resetSubmit}>
    Reset
  </Button>
  </div>
</Form> )
}