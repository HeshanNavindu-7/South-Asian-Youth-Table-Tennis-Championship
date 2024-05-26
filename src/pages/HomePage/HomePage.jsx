// src/pages/HomePage.jsx
import React from 'react';

import Contact from '../../components/ContactUs/Contact';
import MyFooter from '../../components/Footer/footer';
import Moscot from '../../components/Moscot/Moscot';
import Timecounter from './components/TimeCounter/Timecounter';
import Partisipant from './components/partisipant/Partisipant';
import Partners from './components/partners/Partners';
import Slideshow from './components/slideshow';
;

const HomePage = () => {
  return (
    <div>


      <Slideshow />
      <Timecounter />
      <Partisipant />

      <Moscot />
      <Partners />
      <Contact />
      <MyFooter />



    </div>
  );
};

export default HomePage;
