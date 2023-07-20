import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Route, Routes, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import React,{useState, useEffect} from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false);
 
  const sendLoginData = (isLogin) => {
    setIsLogin(isLogin)
  }
 
console.log('test',isLogin)
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

            <Link to={'/login'} className={ isLogin == false ? 'nav-link' : 'nav-link d-none' }> Login</Link>
            <Link to={'/logout'} className={ isLogin == false ? 'nav-link d-none' : 'nav-link' }> Logout</Link>
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/login' element={<Login sendLoginData={sendLoginData}/>}></Route>
      <Route path='/logout' element={<Logout />}></Route>
    </Routes>
    </div>
    </div>
  );
}

export default App;
