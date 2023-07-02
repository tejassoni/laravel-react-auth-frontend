import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function login(){
return ( <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>
  <div className='d-block'>
  <Button variant="primary" size="sm" type="submit" className="mr-10">
    Submit
  </Button>
  <Button variant="info" size="sm" type="button">
    Reset
  </Button>
  </div>
</Form> )
}