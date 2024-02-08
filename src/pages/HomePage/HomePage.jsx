// src/pages/HomePage.jsx
import React from 'react';

import CountdownComponent from '../../components/Countdown/Countdown';
import Participant from './components/Participant/Participant';
import Card from '../../components/Card/Card';
import Contact from '../../components/ContactUs/Contact';

const HomePage = () => {
  return (
    <div>
      
     <CountdownComponent/>
    <Participant/>
    <Card/>
    <Contact/>
    </div>
  );
};

export default HomePage;
