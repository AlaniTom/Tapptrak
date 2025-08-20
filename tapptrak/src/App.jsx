import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/admin';
import Login from './pages/login';
import GuardStat from './pages/guardstat';
import Request from './pages/request';
import Alerts from './pages/alerts';
import Visitor from './pages/visitorlog';
import Guard from './pages/guard';
import GuardQR from './pages/guardqr';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/guardstat" element={<GuardStat />} />
        <Route path="/request" element={<Request />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/guard" element={<Guard />} />
        <Route path="/guardqr" element={<GuardQR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
