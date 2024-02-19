// Partners.jsx

import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners mt-0 text-center">
      <div className='inline-flex flex-col items-center '>
        <h2 className="text-3xl font-bold text-center -ml-24">Partners</h2>
        <div className="box flex space-x-8 -ml-36 lg:flex-row flex-col ">
         
          <img src="../../Public/images/111.jpeg" alt="" className="w-32 lg:w-48 " />
          <img src="../../Public/images/attu (1).jpeg" alt="" className="w-32 lg:w-64 mb-4" />
         
        </div>
      </div>
      <div className='inline-flex flex-col items-center'>
        <h2 className="text-3xl font-bold ml-36 text-center">Equipment Partners</h2>
        <div className='ml-36 mt-4' >
        <img src="../../Public/images/1.jpeg" alt="" className="w-32 lg:w-48  " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
