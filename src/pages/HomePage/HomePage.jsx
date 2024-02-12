// src/pages/HomePage.jsx
import React from 'react';

import Slideshow from './components/slideshow';
import Timecounter from './components/TimeCounter/Timecounter';;
import Updates from './components/Updates';
import Carosel from './components/Carosel';
import Teams from './components/Teams';
import Partisipant from './components/partisipant/Partisipant';
import Partners from './components/partners/Partners';
import MyFooter from '../../components/Footer/footer';
import Moscot from '../../components/Moscot/Moscot';
import Contact from '../../components/ContactUs/Contact';

const HomePage = () => {
  return (
    <div>
      

      <Slideshow/>
      <Timecounter/>
      <Partisipant/>
      <Partners/>
      <Moscot/>
      
      <MyFooter/>



    </div>
  );
};

export default HomePage;
