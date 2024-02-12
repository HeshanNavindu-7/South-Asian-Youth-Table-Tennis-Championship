
import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import './Partners.css';

const Partners = () => {
  return (
    <div className="relative top-96 partners">

        <h2 className="text-6xl flex"><BsFillLightningFill className='text-red-500 m-1'/>Official Equipment Partner</h2>
        <div className="box flex">
            <img src= "../../Public/images/1.jpeg" alt="" width="400px"/>
           
        </div>
       
      
     
    </div>
  );
};

export default Partners;
