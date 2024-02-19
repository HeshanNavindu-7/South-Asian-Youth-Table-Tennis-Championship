import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import './Partisipant.css';

const Partisipant = () => {
  return (
    <div className="mt-56 participant">
      <h2 className="lg:text-4xl text-3xl  font-bold">
        <BsFillLightningFill className='text-red-500 '/>Participant
      </h2>
      <div className="flex mt-12 images-container space-x-4">
        <img src="../../Public/images/bd.png" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
        <img src="../../Public/images/original-bhutan_flag.jpg" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
        <img src="../../Public/images/images (1).png" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
        <img src="../../Public/images/images (2).png" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
        <img src="../../Public/images/1f1f3-1f1f5.jpg" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
        <img src="../../Public/images/images.png" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
        <img src="../../Public/images/Flag_of_Sri_Lanka.svg.png" width="220px" alt="" style={{ animation: 'moveLeftToRight 15s linear infinite' }} />
      </div>
    </div>
  );
};

export default Partisipant;
