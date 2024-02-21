
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './moscot.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Moscot = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>

    <div className='moscotback overflow-hidden flex flex-col lg:flex-row  justify-center mt-16'>
     
      <div className='my-0 text-center lg:ml-0 mt-8 lg:mt-12 lg:text-left' data-aos="fade-right"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1 className='lg:text-5xl text-4xl  font-bold mb-4'> About Us </h1>
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
          <a href="/TTASL.pdf" download>
           <button className='bg-red-500 text-white py-2 px-4 rounded-md shadow-md'>
             Download Guideline Booklet
           </button>
          </a>

        </div>
      </div>
     
      <div className='w-full lg:w-1/2 mt-6 -my-12 ' data-aos="fade-left"  data-aos-offset="300"
     data-aos-easing="ease-in-sine">
       <Link to="/leader">
       <img src='/images/SACJTT_2024  mascot-01.png' alt='Moscot Logo' className='w-full' />
       
       </Link>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className='' viewBox="0 0 1440 320"><path fill="#4141411b" fill-opacity="1" d="M0,192L20,181.3C40,171,80,149,120,122.7C160,96,200,64,240,96C280,128,320,224,360,234.7C400,245,440,171,480,165.3C520,160,560,224,600,213.3C640,203,680,117,720,106.7C760,96,800,160,840,165.3C880,171,920,117,960,112C1000,107,1040,149,1080,176C1120,203,1160,213,1200,181.3C1240,149,1280,75,1320,48C1360,21,1400,43,1420,53.3L1440,64L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg> </div>
  );
}

export default Moscot;
