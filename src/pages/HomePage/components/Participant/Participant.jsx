// Participant.jsx
import React from 'react';
import './Participant.css'; // Import the CSS file

const Participant = () => {
  return (
    <div className="text-center overflow-hidden ">
      <h1 className="font-bold text-4xl mt-20">Participants</h1>
      <div className="flex justify-center items-center mt-12">
        <ul className="horizontal-list">
          <li>
            <img src="./public/images/bd.png" alt="Bangladesh" />
          </li>
          <li>
            <img src="./public/images/images (1).png" alt="Pakistan" />
          </li>
          <li>
            <img src="./public/images/Flag_of_Sri_Lanka.svg.png" alt="Sri Lanka" />
          </li>
          <li>
            <img src="./public/images/images (2).png" alt="India" />
          </li>
          <li>
            <img src="./public/images/images.png" alt="Nepal" />
          </li>
          <li>
            <img src="./public/images/original-bhutan_flag.jpg" alt="Bhutan" />
          </li>
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
    <hr className='w-3/4 mx-auto font-semibold'/>
      <div>
      <h1 className="font-bold text-4xl mt-10">Official Equipment Partner</h1>
      <div>
      <ul className="offical flex justify-center  items-center mt-12 ">
          <li>
            <img src="./public/images/1.jpeg" alt="Bangladesh" />
          </li>
          <li>
            <img src="./public/images/111.jpeg" alt="Pakistan" />
          </li>
          <li>
            <img src="./public/images/11.jpeg" alt="Sri Lanka" />
          </li>
       
        </ul>
      </div>
      </div>
          </div>
  );
};

export default Participant;
