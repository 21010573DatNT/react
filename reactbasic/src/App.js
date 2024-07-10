// ./App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './views/Example/Login';
import Register from './views/Example/Register';
import BankTable from './views/Example/BankTable';
import Admin from './views/Example/Admin'; // Import component Admin
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Trang chủ</h1>
          <nav>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Đăng nhập</Link></li>
              <li><Link to="/register">Đăng ký</Link></li>
              <li><Link to="/admin">Admin</Link></li> {/* Thêm link đến trang Admin */}
            </ul>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} /> {/* Route cho trang Admin */}
            <Route path="/" element={<BankTable />} />
          </Routes>
        </main>
        <footer className="footer">
          © 2024 Your Company
        </footer>
      </div>
    </Router>
  );
};

export default App;
