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
  const hideMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="p-0 flex h-50 w-full relative overflow-hidden header">
        <div className="lg:basis-2/5 transform -skew-x-12 title">
          <h2 className="text-3xl"><img src="/images/logo.png"  className="ml-7 -mt-3 lg:w-44 w-36" alt="" /></h2>
        </div>

        <div className="contacts">
          <div className="flex space-x-20 items-center details">
            <div className="flex items-center space-x-2 ml-3">
              <div className="dis">
                <h2 className="text-sm">Emai</h2>
                <p className="text-xs">info.ttasl@gmail.com</p>
              </div>
              <Mail className="h-8 w-8 text-blue-500 icon" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="dis">
                <h2 className="text-sm">Contact</h2>
                <p className="text-xs">+94777751345</p>
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
          <ul className="flex lg:space-x-10 lg:text-lg  list -ml-52">
            <li>
              <Link to="/"  className={location.pathname === '/' ? 'active-link' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
                About
              </Link>
            </li>
            
           
            <li>
              <Link to="/gallery" className={location.pathname === '/gallery' ? 'active-link' : ''}>
                Gallery
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
              <Link to="/matches" className={location.pathname === '/matches' ? 'active-link' : ''}>
                Matches
              </Link>
            </li>
            <li>
              <Link to="/itsme" className={location.pathname === '/itsme' ? 'active-link' : ''}>
                It's Me
              </Link>
            </li>
            <li>
              <Link to="/#contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
                Contact
              </Link>
            </li>
            <li >
              <Link to="/register" className={location.pathname === '/register' ? 'active-lin' : ''}>
               <p className='-ml-4 -mt-2 text-xl bg-red-600 px-2 py-2 rounded'>  Register</p>
              </Link>
            </li>
          </ul>
        </div>
        <button className="focus:outline-none btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <Delete className="icon1" /> : <Menu className="icon1" />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <ul className="lg:space-x-20 md:space-x-2  lg:text-2xl md:text-xl box1">
        
        <li><Link onClick={hideMobileMenu} to="/" className={location.pathname=='/'?'active-link':''}>Home</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/about" className={location.pathname=='/about'?'active-link':''}>About</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/gallery" className={location.pathname=='/gallery'?'active-link':''}>Gallery</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/kandy" className={location.pathname=='/kandy'?'active-link':''}>Kandy</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/NewsPage" className={location.pathname=='/NewsPages'?'active-link':''}>News</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/" className={location.pathname=='/matches'?'active-link':''}>Matches</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/itsme" className={location.pathname=='/itsme'?'active-link':''}> It's Me</Link></li>
        <li><Link onClick={hideMobileMenu}  to="/" className={location.pathname=='/#contact'?'active-link':''}>Contact</Link></li>
        <li className='bg-red-600' ><Link onClick={hideMobileMenu}  to="/register">Register</Link></li>
        
      </ul>
        
        
        )}
    </>
  );
};

export default Header;
