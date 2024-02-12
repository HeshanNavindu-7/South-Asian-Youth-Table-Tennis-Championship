// GalleryPage.js

import React, { useState, useEffect } from 'react';

const images = [
  '../../Public/images/Untitled-1.png',
  '../../Public/images/Untitled-2.png',
  '../../Public/images/Untitled-3.png',
  '../../Public/images/Untitled-4.png',
  
];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the autoplay interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="relative w-full h-96">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`absolute m-auto top-0 left-80 w-1/2 h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full mx-1 focus:outline-none ${
              index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
