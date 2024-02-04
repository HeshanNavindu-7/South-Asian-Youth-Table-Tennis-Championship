// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Mail, User, Inbox, Menu, Delete } from 'react-feather';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="p-0 flex h-28 w-full relative overflow-hidden header">
        <div className=" title   -skew-x-12">
          <img className='w-36  ' src="./public/images/logo.png"/>
        </div>

        <div className="contacts">
         
          <ul className="flex -mt-9 -ml-40 lg:space-x-20 md:space-x-2 text-xl list ">
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
              <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/register" className={location.pathname === '/register' ? 'active-link' : ''}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/register" className={location.pathname === '/register' ? 'active-link' : ''}>
                Register
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
        <li><Link to="/register">Register</Link></li>
        
      </ul>
        
        
        )}
    </>
  );
};

export default Header;
