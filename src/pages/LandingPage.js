import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

export default function LandingPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (
    <main className="login-page">
      <section className="login-intro" aria-labelledby="login-intro-title">
        <div className="login-brand">
          <span className="login-brand-icon" aria-hidden="true">FM</span>
          Financial Management
        </div>
        <div className="login-intro-content">
          <p className="login-eyebrow">YOUR MONEY. YOUR NEXT CHAPTER.</p>
          <h1 id="login-intro-title">A clearer view of your finances.</h1>
          <p>Bring your accounts, budgets, and financial goals together in one place.</p>
          <ul className="login-benefits">
            <li>Keep track of your accounts</li>
            <li>Build a budget that works for you</li>
            <li>See the bigger financial picture</li>
          </ul>
        </div>
        <p className="login-intro-footer">Small steps. More confidence.</p>
      </section>
      <section className="login-form-panel" aria-labelledby="login-title">
        <div className="login-form-container">
          <p className="login-eyebrow text-primary">LET’S GET STARTED</p>
          <h2 id="login-title">Welcome back</h2>
          <p className="text-secondary mb-4">Your financial overview starts here.</p>
          <Form onSubmit={handleSubmit} aria-label="Log in">
            <Form.Group className="mb-4" controlId="login-email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" autoComplete="username"
                placeholder="you@example.com" required size="lg" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="login-password">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control type={showPassword ? 'text' : 'password'} name="password"
                  autoComplete="current-password" placeholder="Enter your password" required size="lg" />
                <Button variant="outline-secondary" type="button"
                  aria-controls="login-password" aria-pressed={showPassword}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </div>
            </Form.Group>
            <div className="text-end mb-4"><Link to="/forgot-password">Forgot password?</Link></div>
            <Button className="w-100" variant="primary" type="submit" size="lg"
              aria-describedby="login-prototype-note">Log in to demo</Button>
            <p id="login-prototype-note" className="login-prototype-note">
              Prototype preview: use a sample email and password to explore the dashboard.
              Authentication is not connected, and these details are not saved.
            </p>
          </Form>
          <p className="mt-4 text-center">New here? <Link to="/create-account">Create an account</Link></p>
        </div>
      </section>
    </main>
  );
}
