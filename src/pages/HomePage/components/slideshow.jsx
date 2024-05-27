// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './slideshow.css';
const images = [
  '/images/Untitled-5.png',
  '/images/aaall.jpeg',
  '/images/Untitled-1.png',
  '/images/Untitled-2.png',
  '/images/Untitled-3.png',
  '/images/Untitled-4.png',

  '/images/cer (1).jpeg',
  '/images/cer (2).jpeg',
  '/images/cer (3).jpeg',
  '/images/cer (4).jpeg',
  '/images/cer (5).jpeg',
  '/images/cer (6).jpeg',
  '/images/cer (7).jpeg',
  '/images/cer (8).jpeg',
  '/images/cer (9).jpeg',
  '/images/cer (10).jpeg',
  '/images/cer (11).jpeg',
  '/images/ce (1).jpeg',
  '/images/ce (2).jpeg',
  '/images/ce (3).jpeg',
  '/images/ce (4).jpeg',
  '/images/ce (5).jpeg',
  '/images/ce (6).jpeg',
  '/images/ce (7).jpeg',
  '/images/ce (8).jpeg',
  '/images/ce (9).jpeg',
  

  // Add more image URLs as needed
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="slider">
        {images.map((imageUrl, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="left-arrow" onClick={goToPrevSlide}>
        <BsChevronLeft />
      </button>
      <button className="right-arrow" onClick={goToNextSlide}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Slideshow;
