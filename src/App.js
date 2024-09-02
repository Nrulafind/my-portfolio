import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AdminPage from './pages/AdminPage';

import './assets/css/style.css';
import './assets/script.js';
function App() {
  return (
    <Router basename="/my-portfolio">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </Router >
  )
}

export default App;
