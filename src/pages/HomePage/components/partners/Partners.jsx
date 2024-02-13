// Partners.jsx

import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import './Partners.css';

const Partners = () => {
  return (
    <div className="partners mt-10">
      <h2 className="text-5xl font-bold text-center"> Partners</h2>
      <div className="box flex justify-around lg:flex-row  flex-col mt-12 lg:items-center">
        <img src="../../Public/images/111.jpeg" alt="" className="w-32 lg:w-48 mb-4" />
        <img src="../../Public/images/attu (1).jpeg" alt="" className="w-48 lg:w-64 mb-4" />
        <img src="../../Public/images/1.jpeg" alt="" className="w-32 lg:w-48" />
      </div>
    </div>
  );
};

export default Partners;
