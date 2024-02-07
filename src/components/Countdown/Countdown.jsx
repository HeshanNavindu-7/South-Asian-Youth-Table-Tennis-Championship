// CountdownComponent.jsx
import React from 'react';
import Countdown from 'react-countdown-now';
import './CountdownComponent.css';

const CountdownComponent = () => {
  const targetDate = new Date('2024-02-14T23:59:59').getTime();

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <span className="countdown-completed-message ">
          SOUTH ASIAN YOUTH TABLE TENNIS CHAMPIONSHIPS-2024
        </span>
      );
    } else {
      return (
        <div className=" countdown-container ">
             <div className="bg-slide bg1"></div>
            <div className="bg-slide bg2"></div>
             <div className="bg-slide bg3"></div>
          <div className=" bg-slate-900/75 px-6 md:px-12 py-32 rounded">
            <h2 className="text-4xl md:text-6xl text-center font-semibold -mt-16 mb-6">
              SOUTH ASIAN YOUTH TABLE TENNIS <br></br> CHAMPIONSHIPS-2024
            </h2>
            <div className="text-center countdown-timer">
              <div className="countdown-item">
                <span className="countdown-number">{days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{minutes}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{seconds}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>
            <div className='-mt-10 text-center'>
            <button className='btn1 rounded'>Register Now</button>
            </div>
            
          </div>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownComponent;
