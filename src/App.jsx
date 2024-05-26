// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import MoscotPage from './components/MoscotPage/MoscotPage';
import Header from './components/Navbar/Header';
import LEADER from './components/leaderBoard/leader';
import About from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/ContactPage';
import Event from './pages/EventPage/Event';
import Home from './pages/HomePage/HomePage';
import Itsme from './pages/Itsme/Itsme';
import Kandy from './pages/Kandypage/Kandy';
import Matches from './pages/Matches/matches';
import NewsPage from './pages/NewsPage/NewsPage';
import Register from './pages/RegisterPage/RegisterPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kandy" element={<Kandy />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/gallery" element={<Event />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/itsme" element={<Itsme />} />
        <Route path="/MoscotPage" element={<MoscotPage />} />
        <Route path="/leader" element={<LEADER />} />
      </Routes>
    </Router>
  );
};

export default App;
