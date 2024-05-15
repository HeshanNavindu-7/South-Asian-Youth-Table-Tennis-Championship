// src/pages/AboutPage.jsx
import React from 'react';
import { Home } from 'react-feather';
import './matches.css'

const Matches = () => {
  return (
    <div className="container mx-auto">

      <div id="lsc_app" className="grid grid-cols-1">

        <section id="lsc_header" className="col-span-1">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="col-span-1">
              <span className="block text-sm font-medium text-gray-500">Round of 16</span>
              <span className="block text-lg font-semibold">UEFA Champions League</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="col-span-1 sm:col-span-1">
              <img src="https://i.postimg.cc/Jt4kSHD7/barcelona-icon.png" className="w-12 h-12" alt="Barcelona Icon" />
              <div className="mt-2">
                <ul className="text-sm text-gray-500">
                  <li>L Messi 60'</li>
                  <li>L Suarez 66' 88'</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1 flex items-center justify-center">
              <span className="text-2xl font-semibold">3 - 2</span>
              <span className="ml-2 text-sm text-gray-500">90 + 2'</span>
            </div>
            <div className="col-span-1 sm:col-span-1">
              <img src="https://i.postimg.cc/8f5fvxQf/liverpool-icon.png" className="w-12 h-12" alt="Liverpool Icon" />
              <div className="mt-2">
                <ul className="text-sm text-gray-500">
                  <li>M Salah 54'</li>
                  <li>S Mane 85'</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="col-span-1">
              <ul className="flex justify-center mt-4">
                <li className="mr-4">
                  <span className="text-sm font-semibold text-gray-500">Statistics</span>
                </li>
                <li className="mr-4">
                  <span className="text-sm font-semibold text-gray-500">Lineup</span>
                </li>
                <li>
                  <span className="text-sm font-semibold text-gray-500">Formation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
};

export default Matches;
