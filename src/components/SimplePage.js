import AppHeader from './header';
export default function SimplePage({ title, description, children }) {
  return <div className="simple-page"><AppHeader /><main className="simple-content">
    <h1>{title}</h1><p className="text-body-secondary mb-4">{description}</p>
    {children}
  </main></div>;
}
