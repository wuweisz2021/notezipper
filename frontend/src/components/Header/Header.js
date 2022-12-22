
import { Navbar, Nav, Button, 
    Form, FormControl, 
    NavDropdown, Container} 
    from 'react-bootstrap';

    import React from 'react';
import {Link,useNavigate} from 'react-router-dom';


function Header() {

  const history = useNavigate();
  
  return (
    // <Navbar bg="light" expand="lg" >
        <Navbar bg="primary" expand="lg" variant = "dark" >
        <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
        {/* <Navbar>
          <link to="/">Note Zipper</link>
        </Navbar> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form inline>
            <FormControl type="text" placeholder="Search" className='mr-sm-2'/>
            {/* <Button variant="outline-success" >Search</Button> */}
        </Form>

        </Nav>
      
        <Nav>
          <Nav.Link href="/mynotes">
            <link to="/mynotes"></link>
            My Notes</Nav.Link>
          <NavDropdown title="Wei Wu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item 
            onClick={() => {localStorage.removeItem('userInfo');
          history.push("/")
        }} 
            >Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Container>

  </Navbar>
  )
};

export default Header;
