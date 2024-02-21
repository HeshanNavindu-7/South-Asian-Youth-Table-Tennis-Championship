import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function MyFooter() {
  return (
    <footer
      className="bg-neutral-500 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-34 footer">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block space-x-12 ">
          <span className='hover:underline text-cyan-50'><Link to="/">Home</Link></span>
          <span className='hover:underline text-cyan-50'><Link to="/about">About</Link></span>
          <span className='hover:underline text-cyan-50'><Link to="/register">Register</Link></span>
          <span className='hover:underline text-cyan-50'><Link to="/event">Event</Link></span>
          <span className='hover:underline text-cyan-50'><Link to="/kandy">Kandy</Link></span>
          <span className='hover:underline text-cyan-50'><Link to="/contact">Conatct</Link></span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a className="mr-6 text-cyan-50 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
                  
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-800 p-6 text-center dark:bg-neutral-700 footer1">
        <span>© 2024 Copyright </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400 m-3"
          href="https://tw-elements.com/"
        ><br/>SOUTH ASIAN YOUTH TABLE TENNIS CHAMPIONSHIPS-2024</a>
      </div>
    </footer>
  );
}