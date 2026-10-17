import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import AuthLayout from '../components/AuthLayout';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [complete, setComplete] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setComplete(true);
    event.currentTarget.reset();
    setShowPassword(false);
  }

  function validateFields(event) {
    setComplete(false);
    const form = event.currentTarget;
    form.elements.fullName.setCustomValidity(
      form.elements.fullName.value.trim() ? '' : 'Enter your name.'
    );
    form.elements.confirmPassword.setCustomValidity(
      form.elements.password.value === form.elements.confirmPassword.value
        ? '' : 'Passwords must match.'
    );
  }

  return (
    <AuthLayout title="Create an account" description="Start building your financial overview.">
      {complete && <Alert variant="success" role="status">Demo complete: your details passed validation. No account was created or details saved.</Alert>}
      <Form onSubmit={handleSubmit} onChange={validateFields} aria-label="Create an account">
        <Form.Group className="mb-3" controlId="register-name">
          <Form.Label>Full name</Form.Label>
          <Form.Control name="fullName" autoComplete="name" placeholder="Your name" required size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="register-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" autoComplete="email" placeholder="you@example.com" required size="lg" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="register-password">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password"
            required minLength={8} size="lg" aria-describedby="password-help" />
          <Form.Text id="password-help">Use at least 8 characters for this demo.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="register-confirm-password">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control name="confirmPassword" type={showPassword ? 'text' : 'password'} autoComplete="new-password" required size="lg" />
        </Form.Group>
        <Form.Check id="register-show-password" className="mb-4" label="Show passwords"
          checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} />
        <Button type="submit" size="lg" className="w-100" aria-describedby="register-demo-note">Create account (demo)</Button>
        <p id="register-demo-note" className="login-prototype-note">Frontend preview only. Use sample details; account creation will be available when the backend is connected.</p>
      </Form>
    </AuthLayout>
  );
}
