// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Mail, User, Inbox, Menu, Delete } from 'react-feather';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Use useLocation hook to get current location
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="p-0 flex bg-slate-200 h-20 w-full relative overflow-hidden header">
        <div className="logo bg-red-500 basis-1/4 transform -skew-x-12 -ml-2 ">
          <img className='w-24 m-3 ml-24' src="./public/images/logo.png" alt="logo not work" />
        </div>

        <div className="contacts ml-48"> {/* Use ml-auto to move the contacts to the right */}
          <ul className="flex m-6 gap-24 text-lg font-semibold ">
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
              <Link to="/Matches" className={location.pathname === '/matches' ? 'active-link' : ''}>
                Matches
              </Link>
            </li>
            <li className='bg-red-500 px-4 py-2 -m-3 rounded  '>
              <Link to="/register" className={location.pathname === '/register' ? 'active-lin' : ''}>
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
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/register">Register</Link></li>
        
      </ul>
        
        
        )}
    </>
  );
};

export default Header;
