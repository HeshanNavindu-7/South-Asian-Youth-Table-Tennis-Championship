
import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import './Partisipant.css';

const Partisipant = () => {
  return (
    <div className="mt-56 participant">

        <h2 className="lg:text-5xl text-3xl font-bold"><BsFillLightningFill className='text-red-500 m-5'/>Participant</h2>
        <div className="box flex">
            <img src="../../Public/images/bd.png" width="220px" alt="" />
            <img src="../../Public/images/original-bhutan_flag.jpg" width="220px" alt="" />
            <img src="../../Public/images/images (1).png" width="220px" alt="" />
            <img src="../../Public/images/images (2).png" width="220px" alt="" />
            <img src="../../Public/images/1f1f3-1f1f5.jpg" width="250px" alt="" />
            <img src="../../Public/images/images.png" width="220px" alt="" />
            <img src="../../Public/images/Flag_of_Sri_Lanka.svg.png" width="220px" alt="" />
        </div>
       
      
     
    </div>
  );
};

export default Partisipant;
