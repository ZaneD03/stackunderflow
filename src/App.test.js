import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => window.history.replaceState({}, '', '/'));

test('login links to registration and back', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Create an account' }));
  expect(screen.getByRole('heading', { name: 'Create an account' })).toBeInTheDocument();
  const password = screen.getByLabelText('Password');
  const confirmation = screen.getByLabelText('Confirm password');
  fireEvent.change(password, { target: { value: 'sample-password' } });
  fireEvent.change(confirmation, { target: { value: 'different-password' } });
  expect(confirmation.validationMessage).toBe('Passwords must match.');
  fireEvent.change(confirmation, { target: { value: 'sample-password' } });
  expect(confirmation.validationMessage).toBe('');
  fireEvent.click(screen.getByRole('link', { name: /Back to login/ }));
  expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
});

test('password recovery clearly reports that no email was sent', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'Forgot password?' }));
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'demo@example.com' } });
  fireEvent.click(screen.getByRole('button', { name: 'Request reset link (demo)' }));
  expect(screen.getByRole('status')).toHaveTextContent('No reset email was sent');
});
