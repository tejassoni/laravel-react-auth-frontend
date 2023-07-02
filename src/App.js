import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home';
import Login from './Pages/login';

function App() {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">            
            
            <Link to={'/'} className='nav-link'> Home</Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Link to={'/login'} className='nav-link'> Login</Link>
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </div>
    </div>
  );
}

export default App;
