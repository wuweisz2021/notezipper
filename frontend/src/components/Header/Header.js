
import { Navbar, Nav, Button, 
    Form, FormControl, 
    NavDropdown, Container} 
    from 'react-bootstrap';

function Header() {
  return (
    // <Navbar bg="light" expand="lg" >
        <Navbar bg="primary" expand="lg" variant = "dark" >
        <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form inline>
            <FormControl type="text" placeholder="Search" className='mr-sm-2'/>
            {/* <Button variant="outline-success" >Search</Button> */}
        </Form>

        </Nav>
      
        <Nav>
          <Nav.Link href="#home">My Notes</Nav.Link>
          <NavDropdown title="Wei Wu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>

      </Navbar.Collapse>
    </Container>

  </Navbar>
  )
};

export default Header;
