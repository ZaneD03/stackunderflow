import logo from './logo.svg';
import './App.css';
import {Badge,Container,Row,Col,Button,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import AppHeader from './components/header';
import LandingPage from './pages/LandingPage';
import AccountsPage from './pages/Accounts';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<AppHeader />} />
          <Route path="/accounts" element={<AccountsPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;