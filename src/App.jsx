// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/HomePage/HomePage';
import About from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/ContactPage';
import Register from './pages/RegisterPage/RegisterPage';
import Kandy from './pages/Kandypage/Kandy';
import Event from './pages/EventPage/Event';
import './App.css';
import Header from './components/Navbar/Header';
import NewsPage from './pages/NewsPage/NewsPage';
import LEADER from './components/leaderBoard/leader';
import Matches from './pages/Matches/matches';
import Moscot from './components/Moscot/Moscot';
import MoscotPage from './components/MoscotPage/MoscotPage';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kandy" element={<Kandy />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/gallery" element={<Event/>} />
        <Route path="/matches" element={<Matches/>} />
        <Route path="/leader" element={<LEADER/>} />
        <Route path="/MoscotPage" element={<MoscotPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
