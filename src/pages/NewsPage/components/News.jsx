import React from 'react';
import './News.css';

const News = () => {
  return (
    <div>
      <div className="about1 text-center m-auto w-full h-52 overflow-hidden">
        <h2 className="text-center text-6xl relative top-20 text-white">News</h2>
      </div>
      <div className="dis w-full text-center mt-10">
        <h2 className="text-center w-full sm:w-1/2 m-auto font-semibold text-3xl">
          Press Conference Announcement
        </h2>
      </div>

      <div className="cards flex flex-col sm:flex-row justify-center text-center mt-10">
        <div className="box lg:w-56 mb-4 mx-auto">
          <img
            src="./images/news1.jpeg"
            className="custom-shape  lg:max-w-80 lg:mx-1"
            alt=""
          />
        </div>
        <div className="box  md:text-center lg:w-1/3 mb-4 lg:ml-12">
          <div className="lg:text-left text-center">
            <h3>
              TTASL is thrilled to announce the upcoming press conference for the
              highly anticipated South Asian Youth Table Tennis Championship 2024.
            </h3>
            <h3 className='font-semibold text-xl'>Date </h3>
            <p>February 22, 2024 </p>

            <h3 className='font-semibold text-xl'>Time </h3>
            <p>5:00 pm onwards </p>
            <h3 className='font-semibold text-xl'>Location</h3>
            <p>University of Colombo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
