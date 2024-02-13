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
         
          <a className="mr-6 text-cyan-50 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd" />
            </svg>
          </a>
         
          <a className="mr-6 text-cyan-50 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
         
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-800 p-6 text-center dark:bg-neutral-700 footer1">
        <span>© 2024 Copyright  :</span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400 m-3"
          href="https://tw-elements.com/"
        >SOUTH ASIAN YOUTH TABLE TENNIS CHAMPIONSHIPS-2024</a>
      </div>
    </footer>
  );
}