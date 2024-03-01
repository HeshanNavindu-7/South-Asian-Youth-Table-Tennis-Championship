import React from 'react';
import './itsme.css';
const Itsme = () => {
  // Create an array of image sources (replace these with your actual image sources)
  const imageSources = [
   
    './images/download.png',
    './images/pic1.jpeg',
    './images/download.png',

    './images/download.png',
    './images/download.png',
    './images/download.png',
    './images/download.png',
    './images/download.png',
    // ... add more image sources
  ];

  // Define the number of images to display in each row
  const imagesPerRow = 5;

  return (
    <div className='row bg-black'>
      {imageSources.map((imageSource, index) => (
        <div key={index} className='column'>
          <img src={imageSource} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Itsme;
