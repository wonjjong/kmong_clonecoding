import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EventList from './pages/eventList';
import EventDetail from './pages/eventDetail';
import WinningDetail from './pages/winningDetail';

import Home from './pages/home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-detail" element={<EventDetail />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/winning-detail" element={<WinningDetail />} />
      </Routes>
    </Router>
  );
}

export default App;