import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/LandingPage.css';

export default function AuthLayout({ title, description, children }) {
  return (
    <main className="login-page">
      <section className="login-intro" aria-label="Financial Management">
        <div className="login-brand">
          <span className="login-brand-icon" aria-hidden="true">FM</span>
          Financial Management
        </div>
        <div className="login-intro-content">
          <p className="login-eyebrow">YOUR MONEY. YOUR NEXT CHAPTER.</p>
          <h1>A clearer view of your finances.</h1>
          <p>Bring your accounts, budgets, and financial goals together in one place.</p>
        </div>
        <p className="login-intro-footer">Small steps. More confidence.</p>
      </section>
      <section className="login-form-panel" aria-labelledby="auth-title">
        <div className="login-form-container">
          <Link to="/" className="d-inline-block mb-4">← Back to login</Link>
          <h2 id="auth-title">{title}</h2>
          <p className="text-secondary mb-4">{description}</p>
          {children}
        </div>
      </section>
    </main>
  );
}
