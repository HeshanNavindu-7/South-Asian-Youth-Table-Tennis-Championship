// Partners.jsx

import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners mt-8 lg:mt-0 lg:space-x-24  text-center flex flex-col lg:flex-row justify-center items-center">
      {/* Organized by */}
      <div className='inline-flex flex-col items-center mb-8 lg:mb-0 lg:mr-8'>
        <h2 className="text-3xl font-bold mb-4">Organized by</h2>
        <div className="box flex lg:space-x-24 space-x-8 items-center">
          <img src="/images/111.jpeg" alt="" className="w-32 mb-2" />
          <img src="/images/attu (1).jpeg" alt="" className="w-32 mb-2" />
        </div>
      </div>

      {/* Equipment Partners */}
      <div className='inline-flex flex-col items-center lg:items-start'>
        <h2 className="text-3xl font-bold mb-4">Equipment Partners</h2>
        <div className='lg:box flex lg:space-x-24 space-x-8 lg:flex-row items-center'>
          <img src="/images/1.jpeg" alt="" className="w-32 mb-2 lg:mb-0" />
          <img src="/images/meister.png" alt="" className="w-28 mb-2 lg:mb-0" />
        </div>
      </div>
      <div className='inline-flex flex-col items-center lg:items-start'>
        <h2 className="text-3xl font-bold mb-16">Clothing Partner</h2>
        <div className='lg:box flex lg:space-x-24 space-x-8 lg:ml-12   lg:flex-row items-center'>
          <img src="/images/stag.jpeg" alt="" className="w-32  mb-2 lg:mb-0" />
   
        </div>
      </div>
    </div>
  );
};

export default Partners;
