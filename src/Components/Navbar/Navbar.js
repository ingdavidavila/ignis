import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Pictures/Ignislogo.png";

import './Navbar.css';

class NavbarscrollExample extends React.Component{
  render(){
  return (
      <Navbar expand='lg'>
        <Container fluid >
          <Navbar.Brand href="/"><img src={logo} alt="logo" className='logo-nav' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              
              <Nav.Link href="#about">
                About us
              </Nav.Link>
              <a href="mailto:ignis.productions@hotmail.com" onclick="window.location.href='np.html'">Contact</a>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}  

  export default NavbarscrollExample;