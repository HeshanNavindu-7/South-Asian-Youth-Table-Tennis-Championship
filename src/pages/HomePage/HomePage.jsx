// src/pages/HomePage.jsx
import React from 'react';

import CountdownComponent from '../../components/Countdown/Countdown';
import Participant from './components/Participant/Participant';
import Card from '../../components/Card/Card';

const HomePage = () => {
  return (
    <div>
      
     <CountdownComponent/>
    <Participant/>
    <Card/>
    </div>
  );
};

export default HomePage;
