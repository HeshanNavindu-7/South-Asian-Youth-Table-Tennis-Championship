import React, { useState } from 'react';
import './gallery.css';
import { BsPlayFill } from 'react-icons/bs';
import Slideshow from '../../../HomePage/components/slideshow';

const Gallery = () => {
  

  return (
    <div>
      <div className="about1 m-auto w-full h-52 overflow-hidden">
        <h2 className="text-center text-6xl relative top-20 text-white">Gallery</h2>
      </div>
      <div className="dis w-full mt-10 mb-7">
        <h2 className="text-center lg:mx-24 mx-7 m-auto text-3xl">The Table Tennis Association of Sri Lanka (TTASL) Gallery</h2>
      </div>

    <Slideshow/>
     <br/>
    </div>
  );
};

export default Gallery;
