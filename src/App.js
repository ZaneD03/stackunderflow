import logo from './logo.svg';
import './App.css';
import {Badge,Container,Row,Col,Button,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import AppHeader from './components/header';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<AppHeader />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;