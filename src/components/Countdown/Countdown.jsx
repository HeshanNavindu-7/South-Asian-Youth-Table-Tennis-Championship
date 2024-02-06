// CountdownComponent.jsx
import React from 'react';
import Countdown from 'react-countdown-now';

const CountdownComponent = () => {
  // Set the target date for the countdown (replace with your actual date)
  const targetDate = new Date('2024-02-14T23:59:59').getTime();

  // Renderer function to customize the countdown display
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is complete
      return <span>Countdown completed!</span>;
    } else {
      // Render the countdown components (days, hours, minutes, seconds)
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      );
    }
  };

  return (
    <div className="countdown-container">
      <h2>Countdown to Event</h2>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownComponent;
