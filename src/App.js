import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AdminPage from './pages/AdminPage';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute.js';

import './assets/css/style.css';
import './assets/script.js';
function App() {
  return (
    <Router basename="/my-portfolio">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <PrivateRoute path='/admin' element={<AdminPage />} />
      </Routes>
    </Router >
  )
}

export default App;
