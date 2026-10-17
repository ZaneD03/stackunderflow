import './App.css';
import AppHeader from './components/header';
import LandingPage from './pages/LandingPage';
import CreateAccount from './pages/CreateAccount';
import ForgotPassword from './pages/ForgotPassword';
import AccountsPage from './pages/Accounts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<AppHeader />} />
          <Route path="/accounts" element={<AccountsPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;