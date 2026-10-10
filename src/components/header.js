import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#dashboard">Financial Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#accounts">Accounts</Nav.Link>
            <Nav.Link href="#budget">Budget</Nav.Link>
            <Nav.Link href="#financialsummary">Financial Summary</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#myaccount">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#contactus">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#signout">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}