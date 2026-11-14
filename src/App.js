import { ThemeProvider } from './context/ThemeContext';
import Settings from './pages/Settings';
import MyAccount from './pages/MyAccount';
import ContactUs from './pages/ContactUs';
import './theme.css';
import './App.css';
import FinancialSummary from './pages/FinancialSummary';
import LandingPage from './pages/LandingPage';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import AccountsPage from './pages/Accounts';
import BudgetPage from './pages/Budget';
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider><BrowserRouter>
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/financial-summary" element={<FinancialSummary />} />
          <Route path="/budget" element={<BudgetPage />} />
        </Routes>
      </BrowserRouter></ThemeProvider>
  );
}

export default App;