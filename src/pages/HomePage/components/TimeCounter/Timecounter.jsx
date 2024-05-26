import moment from 'moment-timezone';
import React, { useEffect, useState } from 'react';
import './Timecounter.css';

const Timecounter = () => {
  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateCountdown() {
    const targetDate = moment.tz('2024-05-26T00:00:00', 'Asia/Colombo');
    const now = moment().tz('Asia/Colombo');

    const difference = targetDate.diff(now);

    if (difference < 0) {
      return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const duration = moment.duration(difference);
    const days = Math.floor(duration.asDays()); // Calculate days using asDays() method
    const hours = padZero(duration.hours());
    const minutes = padZero(duration.minutes());
    const seconds = padZero(duration.seconds());

    return { days: padZero(days), hours, minutes, seconds }; // Ensure days are padded with zeros
  }

  function padZero(value) {
    return value.toString().padStart(2, '0');
  }

  return (
    <div className="boxa">
      <div className="boxa1">

        {/* <h1>SOUTH ASIAN YOUTH TABLE TENNIS CHAMPIONSHIP-2024</h1>
        <div className="boxa2">
          <div className="t1">
            <span>{countdown.days}</span>
            <p>Days</p>
          </div>
          <span className="text">:</span>
          <div className="t1">
            <span>{countdown.hours}</span>
            <p>Hours</p>
          </div>
          <span className="text">:</span>
          <div className="t1">
            <span>{countdown.minutes}</span>
            <p>Minutes</p>
          </div>
          <span className="text">:</span>
          <div className="t1">
            <span>{countdown.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>

        <Link to="register">
        <button className='btn1'>Register Now</button>
        </Link> */}


      </div>
    </div>
  );
};

export default Timecounter;
