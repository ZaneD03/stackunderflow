import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* Changed href to to, and rendered as Link */}
        <Navbar.Brand as={Link} to="/dashboard">Financial Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            
            {/* Swapped href to to, and added as={NavLink} for active route highlighting */}
            <Nav.Link as={NavLink} to="/accounts">Accounts</Nav.Link>
            <Nav.Link as={NavLink} to="/budget">Budget</Nav.Link>
            <Nav.Link as={NavLink} to="/financial-summary">Financial Summary</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Notifications" id="notifications-dropdown" align="end" className="notifications-dropdown">
              <NavDropdown.Header>Notifications</NavDropdown.Header>
              <div className="notifications-empty"><span aria-hidden="true">✓</span><p className="fw-semibold mb-1">You’re all caught up</p><p className="small text-body-secondary mb-0">No new notifications.</p></div>
            </NavDropdown>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {/* Used as={Link} inside dropdowns to prevent style clashing */}
              <NavDropdown.Item as={Link} to="/my-account">My Account</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact-us">Contact Us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/">
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
