// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Mail, User, Inbox, Menu, Delete } from 'react-feather';
import { BsChatLeftText,BsFacebook } from "react-icons/bs";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Use useLocation hook to get current location
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="p-0 flex h-50 w-full relative overflow-hidden header">
        <div className="lg:basis-2/5 transform -skew-x-12 title">
          <h2 className="text-3xl"><img src="../../Public/images/logo.png"  className="-mt-3 lg:w-44 w-36" alt="" /></h2>
        </div>

        <div className="contacts">
          <div className="flex space-x-20 items-center details">
            <div className="flex items-center space-x-2 ml-36">
              <div className="dis">
                <h2 className="text-sm">Email</h2>
                <p className="text-xs">dfs@example.com</p>
              </div>
              <Mail className="h-8 w-8 text-blue-500 icon" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="dis">
                <h2 className="text-sm">Contact</h2>
                <p className="text-xs">6595971299 </p>
              </div>
              <BsChatLeftText className="h-8 w-8 text-blue-500 icon" />
            </div>
            <div className="flex items-center space-x-2">
       <div className="dis">
          <h2 className=" text-sm">Follow us on</h2>
          <p className="text-xs">www.facebook.com</p>
       </div>
        <a href="https://www.facebook.com/TTASL?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
        <BsFacebook className="text-red-500 h-8 w-8 icon"/>
       </a>
      </div>
          </div>
          <ul className="flex lg:space-x-14 md:space-x-2 text-xl list">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
                About
              </Link>
            </li>
            
            <li>
              <Link to="/register" className={location.pathname === '/register' ? 'active-link' : ''}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/event" className={location.pathname === '/event' ? 'active-link' : ''}>
                Event
              </Link>
            </li>
            <li>
              <Link to="/kandy" className={location.pathname === '/kandy' ? 'active-link' : ''}>
                Kandy
              </Link>
            </li>
            <li>
              <Link to="/NewsPage" className={location.pathname === '/NewsPage' ? 'active-link' : ''}>
                News
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="focus:outline-none btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <Delete className="icon1" /> : <Menu className="icon1" />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <ul className="lg:space-x-20 md:space-x-2 text-3xl box1">
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/event">Event</Link></li>
        <li><Link to="/event">Kandy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>
        
        
        )}
    </>
  );
};

export default Header;
