// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './slideshow.css';
const images = [
  '/images/Untitled-5.png',
  '/images/Untitled-1.png',
  '/images/Untitled-2.png',
  '/images/Untitled-3.png',
  '/images/Untitled-4.png',
  '/images/pic (1).jpeg',
  '/images/pic (2).jpeg',
  '/images/pic (3).jpeg',
  '/images/pic (4).jpeg',
  '/images/pic (5).jpeg',
  '/images/pic (6).jpeg',
  '/images/pic (7).jpeg',
  '/images/pic (8).jpeg',
  '/images/pic (9).jpeg',
  '/images/pic (10).jpeg',
  '/images/pic (11).jpeg',
  '/images/pic (12).jpeg',
  '/images/pic (13).jpeg',
  '/images/pic (14).jpeg',
  '/images/pic (15).jpeg',
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
