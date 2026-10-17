import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import AuthLayout from '../components/AuthLayout';

export default function ForgotPassword() {
  const [complete, setComplete] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setComplete(true);
  }

  return (
    <AuthLayout title="Forgot password?" description="Enter the email address associated with your account.">
      {complete && <Alert variant="info" role="status">Demo complete: your email passed validation. No reset email was sent. Email delivery requires the backend connection.</Alert>}
      <Form onSubmit={handleSubmit} onChange={() => setComplete(false)} aria-label="Reset password">
        <Form.Group className="mb-4" controlId="reset-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" autoComplete="email" placeholder="you@example.com" required size="lg" />
        </Form.Group>
        <Button type="submit" size="lg" className="w-100" aria-describedby="reset-demo-note">Request reset link (demo)</Button>
        <p id="reset-demo-note" className="login-prototype-note">Frontend preview only. This form demonstrates the reset request; it does not change your password.</p>
      </Form>
    </AuthLayout>
  );
}
