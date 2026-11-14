import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimplePage from '../components/SimplePage';

export default function MyAccount() {
  return <SimplePage title="My Account" description="Your profile and account options.">
    <Card className="simple-card"><Card.Body>
      <div className="profile-heading"><span className="profile-avatar" aria-hidden="true">D</span><div><h2 className="h5 mb-1">Demo account</h2><span className="text-body-secondary">Financial Management</span></div></div>
      <p className="text-body-secondary">You’re exploring the frontend demo. Profile details will appear here when sign-in is connected.</p>
      <div className="d-flex gap-2 flex-wrap">
        <Button as={Link} to="/settings" variant="outline-primary">Settings</Button>
        <Button as={Link} to="/contact-us" variant="outline-secondary">Contact us</Button>
        <Button as={Link} to="/" variant="primary">Sign out</Button>
      </div>
    </Card.Body></Card>
  </SimplePage>;
}
