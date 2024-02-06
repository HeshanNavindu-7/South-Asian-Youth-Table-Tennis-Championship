// src/pages/HomePage.jsx
import React from 'react';

import Slideshow from './components/slideshow';
import Timecounter from './components/Timecounter';
import Updates from './components/Updates';
import Carosel from './components/Carosel';
import Teams from './components/Teams';
import CountdownComponent from '../../components/Countdown/Countdown';


const HomePage = () => {
  return (
    <div>
      
     <CountdownComponent/>
    </div>
  );
};

export default HomePage;
