// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './slideshow.css';
const images = [
  '../../Public/images/Untitled-5.png',
  '../../Public/images/Untitled-1.png',
  '../../Public/images/Untitled-2.png',
  '../../Public/images/Untitled-3.png',
  '../../Public/images/Untitled-4.png',
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
