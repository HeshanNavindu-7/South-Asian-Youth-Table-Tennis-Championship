// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/NavBar/Header';
import Home from './pages/HomePage/HomePage';
import About from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/ContactPage';
import Register from './pages/RegisterPage/RegisterPage';
import Kandy from './pages/Kandypage/Kandy';
import Event from './pages/EventPage/Event';
import './App.css';

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
        <Route path="/event" element={<Event/>} />
      </Routes>
    </Router>
  );
};

export default App;
