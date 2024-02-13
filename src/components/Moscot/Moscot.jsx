import React from 'react';
import './moscot.css'
const Moscot = () => {
  return (
    <div className='moscotback  overflow-hidden flex flex-col lg:flex-row text-white justify-center mt-12'>
      <div className='w-full lg:w-1/2 my-8 lg:my-16'>
        <img src='./public/images/moscot.png' alt='Moscot Logo' className='w-full' />
      </div>
      <div className='my-3 lg:ml-0 mt-24'>
        <h1 className='lg:text-5xl text-3xl font-bold mb-4'> About Us </h1>
        <p>
          The South Asian Youth Table Tennis Championships 2024<br/> will be organized by Table Tennis
          Association under auspices <br/>and authority of the Asian Table Tennis Union.
        </p>
        <h3 className='lg:text-2xl text-xl mt-4 font-semibold'>VENUE</h3>
        <p>Municipal Council Indoor Stadium Kandy, Central Province</p>
        <h3 className='text-2xl mt-4 font-semibold'>DATE</h3>
        <p>Sunday 26 May 2024 to Wednesday 29 May 2024</p><br/>
        <p>Team Events : 26-27 May, 2024</p>
        <p>Individual Events : 28-29 May, 2024</p>
        <div className='mt-4'>
          <button className='bg-red-500 text-white py-2 px-4 rounded-md shadow-md'>
            Download Guideline Booklet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Moscot;
